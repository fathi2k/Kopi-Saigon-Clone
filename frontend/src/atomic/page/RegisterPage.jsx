

import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import LoginForm from '../organism/LoginForm';
import {useNavigate} from 'react-router-dom'
import RegisterForm from '../organism/RegisterForm';

const LoginPage = () => {

const navigate = useNavigate();


  return (
    <div className='bg-[#f0f0f0] h-screen flex justify-center items-center'>


                <div className='flex flex-col   items-center py-3 bg-white rounded-2xl'>
                          {/* logo */}
                          <div >
                            <img className='h-10' src="http://kopisaigon.com/wp-content/uploads/2025/08/cropped-LOGO-PNG-KOPI-SAIGON-__.png" alt="" />
                          </div>

                          <div className='border-y border-gray-300 p-2 flex  w-[618px] justify-between '>


                            <div className='flex gap-2'>

                                  <div onClick={()=>navigate('/')} className='flex border p-2 rounded-[5px]'>
                                      <AiOutlineHome size={20}/>
                                     
                                </div>

                                <div onClick={()=> navigate('/login')} className='flex border p-2 items-center cursor-pointer rounded-[5px]'>
                                  <AiOutlineUserAdd />
                                  <h1>Login</h1>
                                </div>
                            </div>


                              <div className='flex border border-[#0BBC5C] text-[#0BBC5C] items-center gap-2 px-2 rounded-[5px]'>
                                      <AiOutlinePlus />
                                      <h1>Create Ticket as a Guest</h1>
                              </div>

                          
                                
                          </div>

                          {/* bahagian login form */}


                          
              <RegisterForm/>



                </div>
    </div>
  )
}

export default LoginPage



