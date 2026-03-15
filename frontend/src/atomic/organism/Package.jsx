import React from 'react'
import Pic from '../atoms/image/Pic'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);


const PackageCard = () => {


useGSAP(()=>{
   

  gsap.fromTo('.card .cardChild',{
    y:200,
   
    opacity : 0,
   
  },{
    y : 0,
    
    stagger : {

      from : 'center',
      amount : 0.7,
    },
     duration :0.5,
    opacity : 1,
     scrollTrigger : {
      trigger : '.cardChild',
      start : 'top bottom',
      // markers : true
      
    }
  })



},[])






  return (
    <div  className='flex flex-col items-center pb-[10%] mt-[10%] '>
            
          
            <div className=' flex justify-around gap-[60px] card'>
            <Pic  className='h-[722px] w-[510px] rounded-[40px] cardChild' src='https://kopisaigon.com/wp-content/uploads/2025/12/Kopi-Saigon-Fever-2026.jpg.webp'/>
            <Pic  className='h-[722px] w-[510px] rounded-[40px] cardChild' src='https://kopisaigon.com/wp-content/uploads/2025/12/YoGood-Kopi-Saigon-724x1024.jpg.webp'/>
            <Pic className='h-[722px] w-[510px] rounded-[40px] cardChild'  src='https://kopisaigon.com/wp-content/uploads/2025/11/KV-PLushie-724x1024.webp'/>
            </div>
           
    </div>
  )
}

export default PackageCard
