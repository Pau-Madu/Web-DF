import { schoolApi } from '@/lib/escoleta-api';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { fields, type FieldDefinition } from '@/lib/escoleta-fields';
import { adultBasic, adultPupil, secondBasic, secondPupil, childrenFields, buildSchoolPayload, type RegistrationOptions } from '@/lib/escoleta';
import './EscoletaRegistration.css';

const privacy = 'He leído y acepto el tratamiento de datos para la gestión de la actividad';
const images = 'Autorizo la toma y difusión de fotografías/vídeos en canales oficiales de la actividad';
const initial: RegistrationOptions = {guardian:false,attends:'',enrolls:'',relationship:'',guardianConfirmed:false,childCount:1,second:false,secondRole:''};

function Field({definition, value, change}: {definition:FieldDefinition;value:string;change:(value:string)=>void}) {
 const {id,label,required,kind,options}=definition;
 const props={id,name:id,required,value,onChange:(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>change(e.target.value)};
 return <div className="escoleta-field"><label htmlFor={id}>{label}{required?' *':''}</label>
  {kind==='select'?<select {...props}><option value="">Selecciona una opción</option>{options?.map(o=><option key={o}>{o}</option>)}</select>:
   kind==='textarea'?<><p className="escoleta-note">{label.startsWith('Alergias')?'Si no tiene, escribe «Ninguna».':''}</p><textarea {...props} rows={3} maxLength={3000}/></>:
   <input {...props} type={kind} maxLength={500}/>}
 </div>;
}

export function EscoletaRegistration() {
 const [step,setStep]=useState(0),[route,setRoute]=useState(''),[options,setOptions]=useState(initial);
 const [values,setValues]=useState<Record<string,string>>({}),[busy,setBusy]=useState(false),[done,setDone]=useState(false),[message,setMessage]=useState('');
 const form=useRef<HTMLFormElement>(null),focusHeading=useRef<HTMLHeadingElement>(null),result=useRef<HTMLParagraphElement>(null);
 const identity=useRef({id:'',payload:''}),pending=useRef<AbortController|null>(null);
 const guardian=options.guardian,student=!guardian||options.enrolls==='yes';
 const update=(changes:Partial<RegistrationOptions>)=>setOptions(previous=>({...previous,...changes}));
 const value=(id:string)=>values[`entry.${id}`]||'';
 const edit=(key:string,text:string)=>setValues(previous=>({...previous,[key]:text}));
 const renderFields=(ids:string[])=>ids.map(id=>{const definition=fields[`entry.${id}`];return definition?<Field key={id} definition={definition} value={value(id)} change={text=>edit(`entry.${id}`,text)}/>:null;});
 useEffect(()=>()=>pending.current?.abort(),[]);
 useEffect(()=>{if(step>0)focusHeading.current?.focus();},[step]);
 useEffect(()=>{if(message)result.current?.focus();},[message]);
 function move(next:number){setMessage('');setStep(next);}
 function advance(){if(form.current?.reportValidity())move(Math.min(step+1,2));}
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(busy||done)return;if(step<2){advance();return;}if(!form.current?.reportValidity())return;
  const data=buildSchoolPayload(options,values),serialized=JSON.stringify(data);
  if(!identity.current.id||identity.current.payload!==serialized)identity.current={id:crypto.randomUUID(),payload:serialized};
  const reference=identity.current.id,controller=new AbortController();pending.current=controller;
  const timer=setTimeout(()=>controller.abort(),20000);setBusy(true);setMessage('Enviando solicitud…');
  try{
   const response=await fetch(`${schoolApi.url}/rest/v1/rpc/enviar_inscripcion_escoleta`,{method:'POST',headers:{'Content-Type':'application/json',apikey:schoolApi.publishableKey},body:JSON.stringify({p_id:reference,p_datos:data}),signal:controller.signal});
   const body=await response.json();
   if(!response.ok)throw new Error(response.status===400&&body.message?body.message:'No se pudo enviar. Inténtalo de nuevo en unos minutos.');
   if(body.referencia!==reference)throw new Error('No hemos podido confirmar la recepción. Puedes reintentarlo.');
   setDone(true);setValues({});setOptions(initial);setMessage(`Solicitud recibida. La escuela revisará la inscripción y se pondrá en contacto contigo. Referencia: ${reference}`);
  }catch(error){
   setMessage(error instanceof Error&&error.name==='AbortError'?'No hemos podido confirmar el envío. Puedes reintentarlo; no se duplicará la solicitud.':error instanceof Error?error.message:'No se pudo enviar la solicitud.');
  }finally{clearTimeout(timer);setBusy(false);pending.current=null;}
 }
 return <section id="inscripcion-escoleta" className="escoleta-registration scroll-mt-6" lang="es" aria-labelledby="registration-heading">
  <div className="mb-6"><p className="font-nav text-2xl text-accent">Inscripción · Escoleta</p><h2 id="registration-heading" className="font-display text-4xl sm:text-5xl">Una solicitud para toda la familia</h2><p className="mt-3 text-lg text-muted-foreground">Adultos por su cuenta, menores con tutor o familias que quieren aprender juntas. El formulario está disponible en castellano.</p></div>
  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
   <form ref={form} onSubmit={submit} className="rounded-md border border-brass bg-vellum p-5 shadow-parchment sm:p-8">
    {!done&&<><ol className="escoleta-progress" aria-label="Pasos de inscripción">{['Participantes','Datos','Autorizaciones'].map((text,i)=><li key={text} aria-current={step===i?'step':undefined}>{i+1}. {text}</li>)}</ol><p className="escoleta-note">Los campos con * son obligatorios. La solicitud queda pendiente de revisión por la escuela.</p></>}
    <fieldset hidden={done||step!==0} disabled={busy||done||step!==0}>
     <legend>¿Quién va a participar?</legend><label htmlFor="registration-type">Tipo de inscripción *</label>
     <select id="registration-type" value={route} required onChange={e=>{setRoute(e.target.value);update({guardian:e.target.value==='minors'});}}><option value="">Selecciona una opción</option><option value="adults">Quiero inscribirme: soy mayor de edad</option><option value="minors">Quiero inscribir a uno o varios menores</option></select>
    </fieldset>
    <fieldset hidden={done||step!==1} disabled={busy||done||step!==1}>
     <legend><h3 ref={focusHeading} tabIndex={-1}>Datos de inscripción</h3></legend>
     <fieldset className="escoleta-choice"><legend>¿Necesitas registrar un tutor legal?</legend>
      <label><input type="radio" name="guardian-role" checked={!guardian} onChange={()=>{update({guardian:false});setRoute('adults');}}/>No necesito tutor: soy mayor de edad y me inscribo por mi cuenta.</label>
      <label><input type="radio" name="guardian-role" checked={guardian} onChange={()=>{update({guardian:true});setRoute('minors');}}/>Soy el padre, la madre o el tutor legal y voy a inscribir a uno o varios menores.</label>
     </fieldset>
     <h4 className="font-nav text-2xl">{guardian?'Datos del padre, madre o tutor legal':'Tus datos como alumno adulto'}</h4>
     {renderFields(adultBasic)}
     {guardian&&<div className="escoleta-guardian">
      <label htmlFor="guardian-relationship">Relación con los menores *</label><select id="guardian-relationship" value={options.relationship} required onChange={e=>update({relationship:e.target.value})}><option value="">Selecciona una opción</option><option value="madre">Madre</option><option value="padre">Padre</option><option value="tutor">Tutor/a legal</option></select>
      <label className="escoleta-check"><input type="checkbox" checked={options.guardianConfirmed} required onChange={e=>update({guardianConfirmed:e.target.checked})}/>Declaro que soy mayor de edad y padre, madre o tutor legal de los menores que inscribo. *</label>
      <label htmlFor="guardian-attends">¿Acompañarás a los menores a las clases? *</label><select id="guardian-attends" value={options.attends} required onChange={e=>update({attends:e.target.value})}><option value="">Selecciona una opción</option><option value="yes">Sí, los acompañaré</option><option value="no">No, no asistiré como acompañante</option></select>
      <p className="escoleta-note">Acompañar a un menor no te inscribe como alumno.</p>
      <label htmlFor="adult-enrolls">¿Quieres inscribirte tú también como alumno? *</label><select id="adult-enrolls" value={options.enrolls} required onChange={e=>update({enrolls:e.target.value})}><option value="">Selecciona una opción</option><option value="no">No, solo inscribo a los menores</option><option value="yes">Sí, quiero aprender y recibir clases</option></select>
     </div>}
     {student&&renderFields(adultPupil)}
     <label className="escoleta-check"><input type="checkbox" checked={options.second} onChange={e=>update({second:e.target.checked})}/>Añadir un segundo contacto o alumno adulto</label>
     {options.second&&<div className="escoleta-guardian"><label htmlFor="second-role">¿Qué función tendrá esta persona? *</label><select id="second-role" required value={options.secondRole} onChange={e=>update({secondRole:e.target.value})}><option value="">Selecciona una opción</option><option value="contact">Solo contacto adicional, no se inscribe</option><option value="student">También se inscribe como alumno</option></select>{renderFields(secondBasic)}{options.secondRole==='student'&&renderFields(secondPupil)}</div>}
     {guardian&&<><label htmlFor="minor-count">¿Cuántos menores quieres inscribir?</label><select id="minor-count" value={options.childCount} onChange={e=>update({childCount:Number(e.target.value)})}>{[1,2,3].map(n=><option key={n} value={n}>{n} {n===1?'menor':'menores'}</option>)}</select>
      {childrenFields.slice(0,options.childCount).map((ids,i)=><fieldset className="escoleta-child" key={i}><legend>Menor {i+1}</legend><p className="escoleta-note">Tutor legal: {value('1123069226')||'la persona registrada arriba'}. No necesitas repetir sus datos.</p>{renderFields(ids)}</fieldset>)}</>}
    </fieldset>
    <fieldset hidden={done||step!==2} disabled={busy||done||step!==2}>
     <legend>Autorizaciones y revisión</legend><div className="escoleta-summary"><p>{value('1123069226')}: {guardian?`tutor legal de ${options.childCount} menor(es). ${options.attends==='yes'?'Acompañará a los menores.':'No asistirá como acompañante.'} ${student?'También se inscribe como alumno.':'No se inscribe como alumno.'}`:'alumno adulto, sin tutor legal.'}</p>{options.second&&<p>{value('818916562')}: {options.secondRole==='student'?'también alumno':'solo contacto adicional'}.</p>}<p>Puedes revisar los datos con «Anterior».</p></div>
     {guardian&&renderFields(['497456677'])}
     <label className="escoleta-check"><input type="checkbox" checked={Boolean(value('1756771690'))} onChange={e=>edit('entry.1756771690',e.target.checked?images:'')}/>{images} (opcional).</label>
     <label className="escoleta-check"><input type="checkbox" checked={Boolean(value('1592077218'))} required onChange={e=>edit('entry.1592077218',e.target.checked?privacy:'')}/>{privacy} *</label>
     {renderFields(['1463632095'])}<p className="escoleta-note">Los datos se guardan en la base de datos de la Escoleta para gestionar la inscripción. Las autorizaciones de imagen son opcionales. Para consultar el tratamiento de datos: tamborsibombos.despertaferro@gmail.com.</p>
    </fieldset>
    <p ref={result} role="status" aria-live="polite" tabIndex={-1} className="my-4 text-lg">{message}</p>
    {!done&&<div className="flex flex-wrap gap-3">{step>0&&<button className="escoleta-button secondary" type="button" disabled={busy} onClick={()=>move(step-1)}>← Anterior</button>}{step<2?<button className="escoleta-button" type="button" onClick={advance}>Continuar →</button>:<button className="escoleta-button" type="submit" disabled={busy}>{busy?'Enviando…':'Enviar solicitud'}</button>}</div>}
   </form>
   <aside className="h-fit rounded-md border border-border bg-vellum p-6 shadow-parchment"><h3 className="font-nav text-2xl">Antes de empezar</h3><p className="mt-3">Si eres mayor de edad, te inscribes sin tutor. Para inscribir menores, registra primero al padre, madre o tutor legal.</p><p className="mt-3">El tutor decide por separado si acompaña y si también recibe clases.</p><p className="mt-3">La escuela revisará la solicitud y os indicará el grupo y las condiciones de matrícula.</p><a className="mt-5 inline-block whitespace-nowrap text-accent underline" href="https://forms.gle/WjuZWvS8DQa4nRnd7" target="_blank" rel="noopener noreferrer">Formulario de Google&nbsp;↗</a></aside>
  </div>
 </section>;
}
