import React from 'react'
import MapMalaysia from './MapMalaysia'



const HeaderMap = ({setInputSearch,inputSearch,handleSearch}) => {
  return (
       <div className='bg-[#E6B549] mt-2 flex flex-col gap-6 mt-[4%]'>
           <MapMalaysia setInputSearch={setInputSearch} inputSearch={inputSearch} handleSearch={handleSearch}/>
    </div>
  )
}

export default HeaderMap
