import React from 'react'



const Footer = () => {
  return (
    <>
    <div className='bg-amber-400 text-amber-800 flex flex-col gap-[45px] h-[291px] justify-center mb-[20%] absolute right-0 left-0'>


  <div className=' flex justify-around '>
          <img className='h-[136px] w-[115px]' src="../../public/image/footer/logo.svg" alt="" />
          <div className='flex gap-2'>
            <div className='mt-3 '>
              <h1 className='font-bold mb-3 text-[20px]'>HELP</h1>
              <p className='text-[15px]'>PRIVACY POLICY</p>
              <p className='text-[15px]'>REFUND AND POLICY</p>
              <p className='text-[15px]'>TERMS AND CONDITIONS</p>
            </div>

            <div className='flex flex-col justify-around '>
              <h1 className='font-bold ml-2 text-[20px]'>FOLLOW US</h1>
              <button onClick={()=> window.location.href = '/login'} className='bg-amber-950 px-[20px] py-[8px] w-[249px] text-[15px] font-bold text-white rounded-[40px]'>My Account</button>
            </div>
          </div>
    </div>


    <div className='flex justify-around'>
      <h1>Copyright © 2025 SERUNI GLOBAL SDN BHD 202201005503 (1451200-M).</h1>
      <h1>by <span className='font-bold'>Fathi</span></h1>
    </div>


    </div>


    
    
    
    </>
  
  )
}

export default Footer
