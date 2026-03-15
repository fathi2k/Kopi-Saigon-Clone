import React from 'react'
import LoginForm from '../organism/LoginForm'
import Navbar from '../organism/Navbar'
import Footer from '../organism/Footer'
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
const LoginPage = () => {

const navigate = useNavigate();





  return (


<>




    <div className='flex flex-col   px-[10%] pt-[5%] bg-[#0000] h-screen justify-center items-center bg-gray-200'>

      <div className=' min-w-[618px] bg-white p-3 rounded-[5px] '>
 <div className='ml-3 mb-[21px]'>
            <div className='flex justify-center py-3'>
              <img className='h-[40px] w-[40px] ' src="https://kopisaigon.com/wp-content/uploads/2025/08/cropped-LOGO-PNG-KOPI-SAIGON-__.png" alt="" />
            </div>

            <div className=' p-2 flex justify-between border-y-1 border-gray-300 items-center'>
                <div className='flex gap-2'>
                  <button onClick={()=> navigate('/')} className='border h-[30px] w-[30px] pl-[6px] rounded-[5px] border-gray-300'><BsFillHouseDoorFill /></button>
                  <button  className='border flex gap-2 items-center px-2 rounded-[5px] border-gray-300 text-gray-900'> <BsFillPersonPlusFill /> Register</button>
                </div>

                <div className=' p-2 border border-[#0BBC5C] flex gap-2 rounded-[5px]'>
                  
                  <button className=' text-[#0BBC5C] flex items-center gap-2 '><AiOutlinePlus size={18}/>Create Ticket as a Guest</button>
                </div>
            </div>

      </div>
   

        <LoginForm/>

   

      </div>

      <div className='mt-5'>
 <h1 >Copyright <span className='text-[#1677FF] '>Kopi Saigon </span>© 2026</h1>
      </div>

    

    </div>

 




</>


  ) 
   
}

export default LoginPage
