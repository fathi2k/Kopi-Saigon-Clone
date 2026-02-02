import React from 'react'
import LoginForm from '../organism/LoginForm'
import Navbar from '../organism/Navbar'
import Footer from '../organism/Footer'

const LoginPage = () => {
  return (


<>


 <Navbar/>

    <div className='flex flex-col   px-[10%] mt-[5%]'>

      <div className='ml-3 mb-[21px]'>
             <h1 className='font-bold text-[32px]'>My Account</h1>
      <h1 className='text-[32px]'>Login</h1>
      </div>
   

        <LoginForm/>

     <div className='px-[20px]'>
        
               <button  className='bg-black text-amber-500 p-2 w-full mb-[20%]'>Browse Product </button>
      </div>
 

    </div>

 
<Footer/>



</>


  ) 
   
}

export default LoginPage
