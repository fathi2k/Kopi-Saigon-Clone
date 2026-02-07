import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
    
    
    <div className='bg-kopi-saigon'>
            
            
              <div className='flex justify-center items-center gap-[20px]'>

                {/* page kiri */}
              <div className='flex flex-col text-yellow-800 leading-tight'>
                    <h1 className='text-[34px] font-bold'>Kopi <span>kegemaran</span></h1>
                    <h1 className='text-[70px] max-w-[600px] font-bold'>FASHA SANDHA & AIDIL AZIZ</h1>
                    <p className='text-[16px]'>Outlet Owner MyTown</p>
              </div>



              {/* page kanan */}


              <div className='b'>

              
                <img className='h-[500px] w-[500px]' src="https://kopisaigon.com/wp-content/uploads/2025/09/PNG-5-1-768x768.png.webp" alt="" />

              </div>

              </div>
          
            
           
    </div>
    
    
    
    
    </>
    
  )
}

export default Header
