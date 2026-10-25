export const adultBasic = ['1123069226','182322416','364342983','1504183623'];
export const adultPupil = ['2096745356','1937655262','760614959'];
export const secondBasic = ['818916562','2084507966','1276690258'];
export const secondPupil = ['1278476670','1347489041'];
export const childrenFields = [
 ['1515525147','687657504','1552078413','2084561270','533185319'],
 ['714298190','1099721967','1209586594','147115696','2008683482'],
 ['1015317726','352252557','386549788','1830638831','1026452017'],
];
export type RegistrationOptions = {
 guardian: boolean; attends: string; enrolls: string; relationship: string;
 guardianConfirmed: boolean; childCount: number; second: boolean; secondRole: string;
};
export function buildSchoolPayload(options: RegistrationOptions, values: Record<string,string>) {
 const student = !options.guardian || options.enrolls === 'yes';
 const payload: Record<string,string> = {
  form_version: '2', participation: options.guardian ? (student ? 'family' : 'minors') : 'adults',
  minor_count: options.guardian ? String(options.childCount) : '0',
  guardian_required: options.guardian ? 'yes' : 'no', adult_enrolls: student ? 'yes' : 'no',
  guardian_attends: options.guardian ? options.attends : 'not_applicable',
  second_adult_role: options.second ? options.secondRole : 'none',
 };
 const ids = [...adultBasic,'1592077218','1756771690','1463632095'];
 if(student)ids.push(...adultPupil);
 if(options.second){ids.push(...secondBasic);if(options.secondRole==='student')ids.push(...secondPupil);}
 if(options.guardian){
  payload['guardian_relationship']=options.relationship;
  payload['guardian_confirm']=options.guardianConfirmed?'yes':'no';
  ids.push('497456677');
  childrenFields.slice(0,options.childCount).forEach((fields,i)=>{ids.push(...fields);payload[`minor_${i+1}_guardian`]='primary';});
 }
 for(const id of ids){const key=`entry.${id}`,value=values[key]?.trim();if(value)payload[key]=value;}
 return payload;
}
