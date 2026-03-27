

import React from 'react'
import Input from '../atoms/input/Input'
import Label from '../atoms/input/Label'
import { useState,useEffect } from 'react'



const RegisterForm = () => {

  const [formData,setFormData] = useState({
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      confirmPassword:''
  })


  // transfer data ke backend

const handleSubmit = async ()=>{
  

  fetch('http://localhost:3000/dataUser',{
    method : 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({
      firstName : formData.firstName,
      lastName : formData.lastName,
      email : formData.email,
      password : formData.password,
    })
  })

  
}




  return (


<form action="" onSubmit={handleSubmit}>


   <div className='flex flex-col gap-2 mt-6'>
            <h1 className='text-[16px] font-bold'>Register</h1>

      <div className='flex gap-3'>

        <div>
           <Label>First Name</Label>
            <Input type='text'  onChange={(e)=> setFormData({...formData,firstName:e.target.value})}  className='border w-[277px] p-2 rounded-[5px] border-gray-300' value={formData.firstName} />
        </div>

        <div>
           <Label>Last Name</Label>
            <Input type='text'  onChange={(e)=> setFormData({...formData,lastName:e.target.value})} className='border w-[277px] p-2 rounded-[5px] border-gray-300'value={formData.lastName}  />
        </div>

      </div>

{/* email */}

            <Label>Email Address</Label>
            <Input onChange={(e)=> setFormData({...formData,email:e.target.value})}   type='email' className='border w-[570px] p-2 rounded-[5px] border-gray-300' value={formData.email}  />




  {/* password  */}


          <Label>Password</Label>
          <Input onChange={(e)=> setFormData({...formData,password:e.target.value})}  type='password' className='border w-[570px] p-2 rounded-[5px] border-gray-300' value={formData.password} />


    {/* confirm password */}

        <Label> Confirm Password </Label>
        <Input  onChange={(e)=> setFormData({...formData,confirmPassword:e.target.value})}  type='password' className='border w-[570px] p-2 rounded-[5px] border-gray-300' value={formData.confirmPassword}/>



        <div className='flex justify-between '>
          <div className='flex items-center gap-2'>
              <input type='checkbox' />
              <h1>Remember me.</h1>
          </div>

          

          <div >
            <button className='bg-[#0BBC5C] p-2 text-white'>Login</button>
          </div>
            
        </div>

            
    </div>
</form>

 
  )
}

export default RegisterForm
