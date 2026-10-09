'use strict';
(() => {
 const ENDPOINT='https://b767-balance-usage.kevin81q.chatgpt.site/api/events';
 const PREFIX='n1-usage-event:',DEVICE='n1-usage-device',MAX_AGE=30*86400000;
 let device,flushing=false;
 try {device=localStorage.getItem(DEVICE);if(!/^[a-f0-9-]{36}$/.test(device||'')){device=crypto.randomUUID();localStorage.setItem(DEVICE,device);}} catch {return;}
 function pending(){
  const out=[];
  try {for(let i=localStorage.length-1;i>=0;i--){const key=localStorage.key(i);if(!key?.startsWith(PREFIX))continue;try{const e=JSON.parse(localStorage.getItem(key));if(e.at<Date.now()-MAX_AGE){localStorage.removeItem(key);continue;}out.push(e);}catch{localStorage.removeItem(key);}}}catch{}
  return out.sort((a,b)=>a.at-b.at);
 }
 async function flush(){
  if(flushing||navigator.onLine===false)return;
  flushing=true;
  try{
   const batch=pending().slice(0,100);
   const r=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({device,events:batch,active:document.visibilityState==='visible'}),credentials:'omit',keepalive:true,signal:AbortSignal.timeout(12000)});
   if(!r.ok)return;
   const response=await r.json();const sent=new Set(batch.map(e=>e.id));
   for(const id of response.accepted||[])if(sent.has(id))localStorage.removeItem(PREFIX+id);
  }catch{}finally{flushing=false;}
 }
 function track(kind){
  try{const e={id:crypto.randomUUID(),kind,at:Date.now()};if(pending().length<5000)localStorage.setItem(PREFIX+e.id,JSON.stringify(e));void flush();}catch{}
 }
 window.N1Usage={calculation:()=>track('calculation')};
 track('open');
 setInterval(()=>{if(document.visibilityState==='visible')void flush();},30000);
 addEventListener('online',()=>void flush());
 document.addEventListener('visibilitychange',()=>void flush());
 addEventListener('pagehide',()=>void flush());
})();

