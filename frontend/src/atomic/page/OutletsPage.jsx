import React from 'react'
import MapMalaysia from '../organism/MapMalaysia'
import Navbar from '../organism/Navbar'
import HeaderMap from '../organism/HeaderMap'
import { useEffect,useState } from 'react'
import { dataOutlets } from '../../data/apiDataOutlets'
import OutletsCard from '../organism/OutletsCard'
import { useSearchParams } from 'react-router-dom'
import Footer from '../organism/Footer'
const OutletsPage = () => {

  //build in react search params//

  const [searchParams] = useSearchParams();


const [dataOri,setDataOri] = useState([]);
const [dataOutlet,setDataOutlets] = useState([]);
const [inputSearch,setInputSearch] = useState('');
const [searchQuery,setSearchQuery] = useState('');


  const handleData = async () =>{

    const data = await dataOutlets();




    if (data){


    const clickedStates = searchParams.get('state');

    if (clickedStates && data[clickedStates]){

      setDataOri(data[clickedStates].outlets)
      setDataOutlets(data[clickedStates].outlets)


    }else{

  const allOutlets = Object.values(data).flatMap((para)=>para.outlets); //ambik semua data dari object jadi array
      setDataOri(allOutlets)
      setDataOutlets(allOutlets)

    }

    
    }

    // console.log(data.MY10.outlets[10].name)
    console.log(data);
    
    
    
  }

  useEffect(()=>{
      handleData()

       console.log("PARAM:", searchParams.get('state'));
      
  },[searchParams])


  // console.log(dataOri);

  //filter  outlets by search//

// const searchSort = (title)=>{
  
//     const filteredOutlets = dataOutlet.filter((para)=>{
//       para.name.toLowerCase() === title.toLowerCase()
//     })



// }


  const filteredOutlets = dataOri.filter((para)=>(
    para.name.toLowerCase().includes(searchQuery.toLowerCase())
    
  ))

  

 


//  console.log(filteredOutlets)



const handleSearch = ()=>{

   setSearchQuery(inputSearch)
  setInputSearch('')
// console.log(filteredOutlets)
  


}


  return (

  <>

  <div className='bg-[#E6B549] '>

  <Navbar/>

{/* bahagian isi */}

  <div>

{/* bahagian Header Map */}

  <HeaderMap setInputSearch={setInputSearch} inputSearch={inputSearch} handleSearch={handleSearch}/>

  {/* bahagian senarai kedai */}


  <div className=' bg-[rgb(230,181,73)] p-5 px-8 grid grid-cols-3 justify-items-center mt-[6%] gap-y-6 '>

  

    {filteredOutlets.length > 0 ? (
       filteredOutlets.map((para,index)=>(
        <OutletsCard key={index + 1} title={para.name} address={para.address} />
      ))
    ) : (

         dataOutlet.map((para,index)=>(
        <OutletsCard key={index + 1} title={para.name} address={para.address} />
      ))


    )}
          
  </div>



  </div>



<Footer/>






  </div>





  
  </>

  
  )
}

export default OutletsPage
