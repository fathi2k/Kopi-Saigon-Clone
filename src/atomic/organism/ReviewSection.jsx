import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger,TextPlugin } from 'gsap/all';
import ReviewCard from '../molecules/ReviewCard';

gsap.registerPlugin(ScrollTrigger,TextPlugin) ;


const ReviewSection = () => {


  // const timeLine = gsap.timeline({
  //   paused : true
  // })


  //ayat 1
useGSAP(()=>{

 
//ayat 1 first load web animation//




gsap.to('.ayat1',{
  opacity : 1,
y : -40,
  ease : '"expo.out"',
  duration : 2.5
})

  // Tiada Hari Tanpa Kopi Kiri// action bila scroll

  gsap.to('.ayat1',{
  
    
     scrollTrigger : {
      trigger : '.ayat1',
      start : 'top 8%',
      end : '2900 20%',
      // markers : true,
      toggleActions : 'play none none',
      scrub : true,
      pin : true,
      
     },
     
  })


//props air bila first load web//

gsap.fromTo ('.prop-air',{
    
    y : 400,
    opacity  : 0
},{

 y : 200,
opacity : 1,
scrollTrigger : {
  start : '40% 80%',
  end: '60% 40%',
  // markers : true
}
 

})




  // botol kopi kanan bila scroll animation//

  gsap.to('.prop-air',{
    scale : 1.2,
    
    scrollTrigger : {
      trigger : '.prop-air',
      // markers : true,
      scrub : true,
      start : 'top center'


      

    }
  })




  // gsap.from('.review-h1',{
  //   text : 'asdasdasdasd',
  //   duration : 2,
  //   ease : 'circ.inOut',
  //   color : 'teal',
  //   scrollTrigger : {
  //     trigger : '.review-h1',
  //     markers : true,
      
  //     start : 'top 80%',
  //     end :  'bottom top'

      

  //   }
  // },)



  //   gsap.from('.review-h1', {
   
  // stagger : 1.5,
  // scale : 0.8,
  // duration: 1.5,
  // textContent:0,   //start from 0
  // snap: { textContent: 10 }, //bundarkan hilangkan 0.1//
  // scrollTrigger: {
  // trigger: '.review-h1',
  // start: '-200px 70%',
  // end : '10px 60%',
 
  //  markers : true,
      
  //   }

  // });




},[])




//review card section///

useGSAP(()=>{

  const cards = gsap.utils.toArray('.cardReview');

  cards.forEach((kad)=>(
      gsap.from(kad.querySelector('.review-h1'),{
       
        textContent : 0,
        snap : {textContent : 1},
        duration : 1.5,
        scrollTrigger : {
          trigger : kad,
          start : '80% 95%',
          end : 'bottom 40%',
          // markers : true,
          toggleActions : 'play pause' //akan run bila first page load
        }
      }),


      // description zoom//
      gsap.to(kad.querySelector('.description'),{
       
        scale : 1.5,
        duration : 2,
        scrollTrigger : {
          trigger : kad,
            start : 'top 70%',
            end : '500px 20%',
            // markers : true,
            scrub : true,
            toggleActions : 'play reverse none reset'
        }
      }),



       // gambar review//


      gsap.fromTo(kad.querySelector('.pic-review'),{
         opacity : 0,
          y : 400

      },{
        opacity : 1,
        y : 0 ,
        scrollTrigger : {
          trigger : kad,
          start : '200px 95%',
           end : '500px 20%',
          //  scrub : true,
          //  markers : true,
           toggleActions : 'play none '
        }
      })


  ))





    



},[])



  return (


    <>
    
      <div className='bg-yellow-400'>
            
            <div className='flex justify-center p-20 '>
              <div className='ayat1'><h1 className='text-red-950 font-bold h-[160px] w-[570px] text-[80px] '>TIADA HARI, TANPA KOPI</h1></div>
              <div><h1 className='max-w-[350px] text-[43px] font-bold text-yellow-700'>To become no. 1 No 1 Vietnamese Coffee brand in Asian</h1></div>
            </div>



               {/* bawah */}

      <div className='flex items-end flex-col relative '>

        <img src="https://kopisaigon.com/wp-content/uploads/2025/07/assest-licensing.png.webp" className='h-[725px] w-[574px] prop-air z-0 absolute top-[-400px]' alt="" />

      </div>



       {/* bahagian review card */}

<div className='flex items-end px-[10%]  flex-col gap-[250px] pb-[10%] pt-[30%]'>

         <ReviewCard src='https://kopisaigon.com/wp-content/uploads/2025/09/Grey-Minimalist-Photography-Blog-YouTube-Channel-Art-1024x576.jpg.webp' num='242 +' desc='Kopi Saigon outlets nationwide'/>
         <ReviewCard src='https://kopisaigon.com/wp-content/uploads/2025/09/total-barista-1024x578.jpg.webp' num='720+' desc='Kopi Saigon barista nationwide'/>
         <ReviewCard src='https://kopisaigon.com/wp-content/uploads/2025/09/kopi-saigon-cup-sold-1024x578.jpg.webp' num='10000000'  desc='Kopi Saigon cup sold per year'/>
         <ReviewCard src='https://kopisaigon.com/wp-content/uploads/2025/09/img4-2.png.webpbp' num='100'  desc='Customer Satisfaction'/>
</div>
     

          
    
    </div> 

     
    
    </>
  



  )
}

export default ReviewSection
