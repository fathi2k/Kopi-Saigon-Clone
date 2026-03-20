import React, { useEffect } from 'react'
import Navbar from './Navbar'
import gsap from 'gsap'




const Header = () => {



useEffect(()=>{

  gsap.to('.box-atas',{
  scale : 1.2,
  x : -20,
  repeat : -1,
  duration : 1.2,
  yoyo : true,
})


},[])





  return (
    <>
    
    
    <div className='bg-kopi-saigon'>
            
            
              <div className='flex justify-center items-center gap-[20px] '>

                <div className='flex flex-col gap-5'>

                  <div>
                    <button className='bg-[#8A4E21] text-white p-2 rounded-[5px] box-atas text-[15px] font-archivo w-[168px] h-[38px]'>Kopi Saigon Shop</button>
                  </div>
               

                {/* page kiri */}
              <div className='flex flex-col text-[#8A4E21] leading-tight'>
                    <h1 className='text-[34px] font-bold'>Kopi <span>kegemaran</span></h1>
                    <h1 className='text-[70px] max-w-[600px] font-bold'>FASHA SANDHA & AIDIL AZIZ</h1>
                    <p className='text-[16px]'>Outlet Owner MyTown</p>
              </div>


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
