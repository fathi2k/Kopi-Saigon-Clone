import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'



// coordinates percentage based on map size
// const stateLabels = [
//   { id: "MY01", name: "Johor",           top: "78%", left: "18%" },
//   { id: "MY02", name: "Kedah",           top: "16%", left: "18%" },
//   { id: "MY03", name: "Kelantan",        top: "22%", left: "38%" },
//   { id: "MY04", name: "Melaka",          top: "72%", left: "24%" },
//   { id: "MY05", name: "N. Sembilan",     top: "65%", left: "23%" },
//   { id: "MY06", name: "Pahang",          top: "48%", left: "30%" },
//   { id: "MY07", name: "Penang",          top: "18%", left: "14%" },
//   { id: "MY08", name: "Perak",           top: "35%", left: "18%" },
//   { id: "MY09", name: "Perlis",          top: "9%",  left: "15%" },
//   { id: "MY10", name: "Klang Valley",    top: "56%", left: "22%" },
//   { id: "MY11", name: "Terengganu",      top: "30%", left: "40%" },
//   { id: "MY12", name: "Sabah",           top: "25%", left: "80%" },
//   { id: "MY13", name: "Sarawak",         top: "55%", left: "62%" },
// ];






const MapMalaysia = ({inputSearch,setInputSearch,handleSearch}) => {

const navigate = useNavigate()


  useEffect(()=>{

  //     console.log('simplemaps wujud?', window.simplemaps_countrymap)
  // console.log('mapdata wujud?', window.simplemaps_countrymap_mapdata)

if (window.simplemaps_countrymap){

  window.simplemaps_countrymap.hooks.click_state = function(id){
    navigate(`/outlets?state=${id}`)
  }


  window.simplemaps_countrymap.load()
}



  },[])


  //filter by search//





  return (
    
    <>
    <div className='flex justify-center relative  p-2'>
          <input type="text" onChange={(e)=> setInputSearch(e.target.value)}  value={inputSearch} placeholder='Search Store Location...' className='w-[1120px] bg-white p-5 rounded-4xl' />
          <button onClick={()=>handleSearch()} className='bg-[#E6B549] p-2 rounded-3xl absolute right-[18%] top-[24%] text-[#783819] font-bold'>Find Outlet</button>
 
    </div>
    


    {/* <div className='relative p-2'>
        <div className='bg-[#E6B549]' id='map'>

{stateLabels.map((para)=>(
          <div className='absolute flex flex-col items-center' key={para.name}>

            <div className="bg-white border border-yellow-400 rounded px-2 py-1 text-center shadow-sm w-[100px]">
              <div className='flex bg-blue-300 items-center rounded-2xl py-1 px-3'>
           <p className="text-xs font-bold text-gray-700 bg-[#EE3F24] text-[21px]">{para.name}</p>
            <p className="text-xs font-bold text-gray-700 bg-[#F3E8D7] rounded-[50%] p-2">{para.count}</p>
              </div>
            
            <img src="https://kopisaigon.com/wp-content/uploads/2025/08/cropped-LOGO-PNG-KOPI-SAIGON-__.png" alt="" />
          </div>


          </div>
        ))}

        </div>
        
    </div> */}


     <div className="relative w-full ">
      {/* simplemaps map */}
      <div className='mx-[151px]' id="map" />

      {/* label overlay */}
      {/* {stateLabels.map((state) => (
        <div
          key={state.id}
          className="absolute pointer-events-none"
          
        >
          <div className="bg-[#E6B549] text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm z-100">
            {state.name}
          </div>
        </div>
      ))} */}
    </div>
    
    </>
   
  )
}

export default MapMalaysia
