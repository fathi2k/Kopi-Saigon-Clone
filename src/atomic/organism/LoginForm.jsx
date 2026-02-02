import React from 'react'
import Input from '../atoms/input/Input'
import InputText from '../molecules/InputText'

import { useValidation } from '../customs/hook/useValidation'
import { useForm } from 'react-hook-form'
import z  from 'zod' //libary zod
import { zodResolver } from '@hookform/resolvers/zod' // connect zod dengan formHook//


const LoginForm = () => {

const validations = useValidation();




//set rules untuk form //
const loginSchema = z.object({
  username : z.string().min(4,'Minimum 4 patah perkataan untuk username').max(10,'Maximum 10 patah perkataan'),
  password : z.string().min(4,'Minimum 4 patah perkataan untuk kata Laluan').max(10,'Maximum 10 patah perkataan')
})


//zon Resolve guna kat sini //
const formHook = useForm({
  resolver : zodResolver(loginSchema) 
});


const handleSubmitt = (values)=>{
  alert('Login Sucessfull ✅')
  console.log(values)
}

const errors = formHook.formState.errors;


                       




  return (


    <form onSubmit={formHook.handleSubmit(handleSubmitt)} action="">


 <div className='border m-3 p-6 flex flex-col gap-4 border-gray-300'>
      {/* Email */}
      <h1>{validations.userNameInput}</h1>
          <InputText {...formHook.register('username')}   type='text' >Username or email address</InputText>

      {/* handling error */}

      {errors.username && (

<span className='text-white bg-red-500 p-2'>{errors.username?.message}</span>

      )}


          {/* Password */}

          <InputText  {...formHook.register('password')}  type='password' >Password</InputText>
          
{/* <span className={`text-white bg-red-400 p-1 w-[400px] rounded-[10px] ${!validations.passwordErrorMesej ? 'hidden' : validations.passwordErrorMesej}`} >{validations.passwordErrorMesej}</span> */}

           {errors.password && (

<span className='text-white bg-red-500 p-2'>{errors.password?.message}</span>

      )}


  <div className=' flex gap-2'>
           <button  className='bg-black text-amber-400 h-[38px] w-[106px] text-[15px] rounded-[5px]'>Login</button>

              <label htmlFor="" className='flex gap-1 items-center'> 
                  <input type="checkbox" className='bg-green-800 '/>
                  Remember me 
              </label>
               
  </div>

    <p className='text-[12px] text-amber-400'>Lost your password ? </p>

     
          
    </div>

   


    </form>
   
  )
}

export default LoginForm
