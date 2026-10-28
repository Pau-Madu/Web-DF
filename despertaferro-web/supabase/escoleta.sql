-- Solicitudes: sin lectura ni escritura directa desde los roles web.
begin;
create table public.escoleta_solicitudes (
 id uuid primary key,
 created_at timestamptz not null default now(),
 estado text not null default 'pendiente' check (estado in ('pendiente','contactado','aceptado','lista_espera','baja')),
 datos jsonb not null check (jsonb_typeof(datos) = 'object'),
 version_formulario text not null default '2026-10-24'
);
alter table public.escoleta_solicitudes enable row level security;
revoke all on public.escoleta_solicitudes from anon, authenticated;
create function public.enviar_inscripcion_escoleta(p_id uuid, p_datos jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
 k text; v jsonb; field_id text; child_count integer;
 child_fields text[][] := array[
 array['1515525147','687657504','2084561270','533185319'],
 array['714298190','1099721967','147115696','2008683482'],
 array['1015317726','352252557','1830638831','1026452017']
 ];
 i integer; j integer; d date;
begin
 if p_id is null or p_datos is null or jsonb_typeof(p_datos) <> 'object' or octet_length(p_datos::text)>24000 then raise exception 'Solicitud no válida'; end if;
 if p_datos->>'participation' is null or p_datos->>'participation' not in ('adults','minors','family') then raise exception 'Selecciona los participantes'; end if;
 for k,v in select * from jsonb_each(p_datos) loop
  if jsonb_typeof(v) <> 'string' or length(v#>>'{}')>3000 or k !~ '^(participation|minor_count|entry\.[0-9]+)$' then raise exception 'Campo no válido'; end if;
 end loop;
 foreach field_id in array array['1123069226','182322416','2096745356','364342983','1504183623','760614959','1592077218'] loop
  if length(trim(coalesce(p_datos->>('entry.'||field_id),'')))=0 then raise exception 'Faltan datos obligatorios'; end if;
 end loop;
 if p_datos->>'entry.1504183623' !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' then raise exception 'Correo no válido'; end if;
 d := (p_datos->>'entry.2096745356')::date;
 if d>current_date-interval '18 years' or d<current_date-interval '120 years' then raise exception 'El responsable debe ser mayor de edad'; end if;
 if p_datos->>'entry.760614959' not in ('Si','No') then raise exception 'Revisa la condición de socio'; end if;
 if p_datos->>'entry.1592077218' <> 'He leído y acepto el tratamiento de datos para la gestión de la actividad' then raise exception 'Falta aceptar el tratamiento de datos'; end if;
 child_count := case when p_datos->>'participation'='adults' then 0 else coalesce(p_datos->>'minor_count','0')::integer end;
 if p_datos->>'participation'<>'adults' and child_count not between 1 and 3 then raise exception 'Número de menores no válido'; end if;
 for i in 1..child_count loop
  for j in 1..4 loop
   if length(trim(coalesce(p_datos->>('entry.'||child_fields[i][j]),'')))=0 then raise exception 'Faltan datos del menor'; end if;
  end loop;
  d := (p_datos->>('entry.'||child_fields[i][2]))::date;
  if d>current_date-interval '3 years' or d<=current_date-interval '18 years' then raise exception 'Los menores deben tener entre 3 y 17 años'; end if;
  if p_datos->>('entry.'||child_fields[i][3]) not in ('Si','No') then raise exception 'Revisa la condición de socio del menor'; end if;
 end loop;
 -- Repetir el mismo envío no crea otra solicitud; tampoco actualiza datos existentes.
 insert into public.escoleta_solicitudes(id,datos) values(p_id,p_datos) on conflict(id) do nothing;
 return jsonb_build_object('referencia',p_id,'estado','recibida');
end;
$$;
revoke all on function public.enviar_inscripcion_escoleta(uuid,jsonb) from public;
grant execute on function public.enviar_inscripcion_escoleta(uuid,jsonb) to anon, authenticated;
commit;

begin;
create or replace function public.enviar_inscripcion_escoleta(p_id uuid, p_datos jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
 k text; v jsonb; field_id text; child_count integer;
 child_fields text[][] := array[
 array['1515525147','687657504','2084561270','533185319'],
 array['714298190','1099721967','147115696','2008683482'],
 array['1015317726','352252557','1830638831','1026452017']
 ];
 i integer; j integer; d date;
begin
 if p_id is null or p_datos is null or jsonb_typeof(p_datos) <> 'object' or octet_length(p_datos::text)>24000 then raise exception 'Solicitud no válida'; end if;
 if p_datos->>'participation' is null or p_datos->>'participation' not in ('adults','minors','family') then raise exception 'Selecciona los participantes'; end if;
 for k,v in select * from jsonb_each(p_datos) loop
  if jsonb_typeof(v) <> 'string' or length(v#>>'{}')>3000 or k !~ '^(form_version|participation|minor_count|guardian_required|adult_enrolls|guardian_attends|guardian_relationship|guardian_confirm|second_adult_role|minor_[1-3]_guardian|entry\.[0-9]+)$' then raise exception 'Campo no válido'; end if;
 end loop;
 foreach field_id in array array['1123069226','182322416','364342983','1504183623','1592077218'] loop
  if length(trim(coalesce(p_datos->>('entry.'||field_id),'')))=0 then raise exception 'Faltan datos obligatorios'; end if;
 end loop;
 if p_datos->>'entry.1504183623' !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' then raise exception 'Correo no válido'; end if;
 if coalesce(p_datos->>'form_version','1')='1' or p_datos->>'adult_enrolls'='yes' then
 if coalesce(p_datos->>'entry.2096745356','')='' or coalesce(p_datos->>'entry.760614959','') not in ('Si','No') then raise exception 'Completa los datos del alumno adulto'; end if;
 d := (p_datos->>'entry.2096745356')::date;
 if d>current_date-interval '18 years' or d<current_date-interval '120 years' then raise exception 'El responsable debe ser mayor de edad'; end if;
 end if;
 if p_datos->>'entry.1592077218' <> 'He leído y acepto el tratamiento de datos para la gestión de la actividad' then raise exception 'Falta aceptar el tratamiento de datos'; end if;
 child_count := case when p_datos->>'participation'='adults' then 0 else coalesce(p_datos->>'minor_count','0')::integer end;
 if p_datos->>'participation'<>'adults' and child_count not between 1 and 3 then raise exception 'Número de menores no válido'; end if;
 if coalesce(p_datos->>'form_version','1') not in ('1','2') then raise exception 'Versión no válida'; end if;
 if p_datos->>'form_version'='2' then
  if coalesce(p_datos->>'guardian_required','') not in ('yes','no') or coalesce(p_datos->>'adult_enrolls','') not in ('yes','no') then raise exception 'Indica si eres tutor y si te inscribes como alumno'; end if;
  if p_datos->>'guardian_required'='yes' then
   if child_count<1 or coalesce(p_datos->>'guardian_relationship','') not in ('padre','madre','tutor') or coalesce(p_datos->>'guardian_confirm','')<>'yes' then raise exception 'Registra un tutor legal para los menores'; end if;
   if coalesce(p_datos->>'guardian_attends','') not in ('yes','no') then raise exception 'Indica si el tutor acompañará a los menores'; end if;
   if (p_datos->>'adult_enrolls'='yes' and p_datos->>'participation'<>'family') or (p_datos->>'adult_enrolls'='no' and p_datos->>'participation'<>'minors') then raise exception 'Revisa quién se inscribe como alumno'; end if;
   for i in 1..child_count loop
    if coalesce(p_datos->>('minor_'||i||'_guardian'),'')<>'primary' then raise exception 'Vincula cada menor a su tutor legal'; end if;
   end loop;
  else
   if p_datos->>'participation'<>'adults' or p_datos->>'adult_enrolls'<>'yes' or coalesce(p_datos->>'minor_count','')<>'0' or coalesce(p_datos->>'guardian_attends','')<>'not_applicable' then raise exception 'Un menor necesita un tutor legal'; end if;
  end if;
  if coalesce(p_datos->>'second_adult_role','') not in ('none','contact','student') then raise exception 'Indica la función del segundo adulto'; end if;
  if p_datos->>'second_adult_role' in ('contact','student') and length(trim(coalesce(p_datos->>'entry.818916562','')))=0 then raise exception 'Falta el nombre del segundo adulto'; end if;
 end if;
 for i in 1..child_count loop
  for j in 1..4 loop
   if length(trim(coalesce(p_datos->>('entry.'||child_fields[i][j]),'')))=0 then raise exception 'Faltan datos del menor'; end if;
  end loop;
  d := (p_datos->>('entry.'||child_fields[i][2]))::date;
  if d>current_date-interval '3 years' or d<=current_date-interval '18 years' then raise exception 'Los menores deben tener entre 3 y 17 años'; end if;
  if p_datos->>('entry.'||child_fields[i][3]) not in ('Si','No') then raise exception 'Revisa la condición de socio del menor'; end if;
 end loop;
 -- Repetir el mismo envío no crea otra solicitud; tampoco actualiza datos existentes.
 insert into public.escoleta_solicitudes(id,datos,version_formulario) values(p_id,p_datos,case when p_datos->>'form_version'='2' then '2026-10-24-v2' else '2026-10-24' end) on conflict(id) do nothing;
 return jsonb_build_object('referencia',p_id,'estado','recibida');
end;
$$;
commit;
