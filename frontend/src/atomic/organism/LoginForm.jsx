import React from 'react'
import Input from '../atoms/input/Input'
import InputText from '../molecules/InputText'
import { useState,useEffect } from 'react'
import { useValidation } from '../customs/hook/useValidation'
import { useForm } from 'react-hook-form'
import z  from 'zod' //libary zod
import { zodResolver } from '@hookform/resolvers/zod' // connect zod dengan formHook//


const LoginForm = () => {

const validations = useValidation();
const [dataUser,setDataUser] = useState([]);



//set rules untuk form //
const loginSchema = z.object({
  username : z.string().min(4,'Minimum 4 patah perkataan untuk username').max(10,'Maximum 10 patah perkataan'),
  password : z.string().min(4,'Minimum 4 patah perkataan untuk kata Laluan').max(10,'Maximum 10 patah perkataan')
})


//zon Resolve guna kat sini //
const formHook = useForm({
  resolver : zodResolver(loginSchema) 
});


const handleSubmitt = async (values)=>{
 

  setDataUser(values)
  
 

     await fetch('http://localhost:3000/dataUser',{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(values)
      }).then(res => res.json()).then(data => alert(data.message))

//reset lepas submit//

formHook.reset({username:'',password:''})
  
}


//transfer kat backend///









const errors = formHook.formState.errors;


                       




  return (


    <form onSubmit={formHook.handleSubmit(handleSubmitt)} action="">

      
             
 <div className=' mx-3 p-6 flex flex-col gap-4 '>
   <h1 className='text-[21px] font-bold'>Login</h1>
      {/* Email */}
      <h1>{validations.userNameInput}</h1>
          <InputText {...formHook.register('username')}   type='text' ><span className='text-red-600 text-[20px] align-middle pr-1' >*</span>Username or email address</InputText>

      {/* handling error */}

      {errors.username && (

<span className='text-white bg-red-500 p-2'>{errors.username?.message}</span>

      )}


          {/* Password */}

          <InputText  {...formHook.register('password')}  type='password'><span className='text-red-600 text-[20px] align-middle pr-1' >*</span>Password</InputText>
          
{/* <span className={`text-white bg-red-400 p-1 w-[400px] rounded-[10px] ${!validations.passwordErrorMesej ? 'hidden' : validations.passwordErrorMesej}`} >{validations.passwordErrorMesej}</span> */}

           {errors.password && (

<span className='text-white bg-red-500 p-2'>{errors.password?.message}</span>

      )}


  <div className=' flex gap-2  justify-between'>
       

              <label htmlFor="" className='flex gap-1 items-center'> 
                  <input type="checkbox" className='bg-green-800 '/>
                  Remember me 
              </label>

                  <button  className='bg-[#0BBC5C] text-white h-[38px] w-[106px] text-[15px] rounded-[5px]'>Login</button>
               
  </div>

<div className='flex justify-center '>
    <p className='text-[15px] '>Lost your password ? <span className='text-[#0BBC5C]'>Reset Password</span></p>
</div>


     
          
    </div>

   


    </form>
   
  )
}

export default LoginForm
