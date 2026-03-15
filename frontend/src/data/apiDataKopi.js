

export const apiData = async ()=>{
  const res = await fetch('public/dataKopi.json');
  const resJson = await res.json();
  
  return resJson
}