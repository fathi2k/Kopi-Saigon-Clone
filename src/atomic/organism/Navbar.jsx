import React from 'react'
import Navkiri from '../molecules/Navkiri'
import Navtengah from '../molecules/Navtengah'
import Navkanan from '../molecules/Navkanan'

const Navbar = () => {
  return (
    <div className=' bg-amber-400 flex justify-center items-center p-2'>
            <Navkiri/>
            <Navtengah />  
            <Navkanan/>

    </div>
  )
}

export default Navbar
