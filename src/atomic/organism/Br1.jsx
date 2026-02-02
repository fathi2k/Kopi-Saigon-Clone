import React from 'react'
import Pic from '../atoms/image/Pic'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Br1 = () => {


//buat timeLine//

const timeLine = gsap.timeline({
  duration  : 1,
  yoyo : true,
})


useGSAP(()=>{



timeLine.fromTo('#animation1',{
y : 50,
 opacity : 0
  
},{
y : 0,
opacity : 1,
 ease : 'power1.in',
  duration : 1.5,

})





    //animation1 trigger bila scroll//

    timeLine.to ('.biji-kopi',{
      y : -60,
      duration : 2,
      

       scrollTrigger : {
          trigger : '.biji-kopi',
          start : '30% center',
          end : 'top 20%',
           
           scrub : true
       },
      
    })


    timeLine.to('.air-kopi',{
      x : -600,
      
      scrollTrigger : {
        start : '12% center',
        end : '40% 20%',
        // markers : true ,
        scrub : true
      }
    })


},[])

  return (
    <div  className='flex items-center relative gap-[17%]'>
          <div id='animation1' className='flex '>
                <Pic className='h-[239px] w-[450px] biji-kopi' src='https://kopisaigon.com/wp-content/uploads/2025/07/Asset-7.png.webp'/>
                <Pic className='h-[409px] w-[346px] air-kopi absolute left-[250px]' src='https://kopisaigon.com/wp-content/uploads/2025/07/kopi.png.webp'/>
          </div>

          <div className='flex justify-center'>
                  <h1 className='text-amber-900  text-[32px] font-bold absolute right-[35%] top-[70%]'>
                    MONTHLY SPECIAL
                  </h1>
          </div>
    </div>
  )
}

export default Br1
