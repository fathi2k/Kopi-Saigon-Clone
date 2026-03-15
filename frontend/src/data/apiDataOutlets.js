

export const dataOutlets = async ()=>{
  const data = await fetch('../public/dataOutlets.json');
  const dataJSON = await data.json();
  return dataJSON
}