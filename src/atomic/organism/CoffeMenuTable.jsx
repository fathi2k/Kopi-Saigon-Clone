import React, { useEffect, useState } from 'react'
import CoffeCard from '../molecules/CoffeCard'
import { apiData } from '../../data/apiDataKopi';

const CoffeMenuTable = ({coffeeRef,nonCoffeeRef,frappeRef,selectedTitle}) => {

       const [dataKopi,setDataKopi] = useState([]);
       const coffeeSeries = dataKopi.filter((para)=>para.category === 'coffee');
       const nonCoffeeSeries = dataKopi.filter((para)=>para.category === 'non-coffee');
       const frapeeSeries = dataKopi.filter((para)=>para.category === 'frappe');

useEffect(()=>{

const handleData = async ()=>{
       const data = await apiData();
       setDataKopi(data)
       console.log(data)
       setDataKopi(data)
}

handleData()
},[])




  return (

<div>

       {/* Coffee */}

 <div ref={coffeeRef} className='  flex justify-center '>

       <div  className='flex flex-col border-b-1 pb-[5%]'>
   <h1 className='font-bold text-[50px] text-amber-800'>COFFEE SERIES</h1>
              <div className=' flex grid grid-cols-4'>
 {coffeeSeries.map((para)=>{
                  return   <CoffeCard key={para.id} src={para.images} title={para.name} onClick={()=>selectedTitle(para)} className='flex flex-col items-center gap-2  hover:bg-gray-600 transition-all hover:text-white ' />
              })}                     
              </div>
             

       </div>
    
       </div>


       {/* non Coffee */}


<div ref={coffeeRef} className='  flex justify-center'>

       <div  className=' flex flex-col border-b-1 pb-[5%]'>
   <h1 className='font-bold text-[50px] text-amber-800'>NON COFFEE SERIES</h1>
              <div className=' flex grid grid-cols-4'>
 {nonCoffeeSeries.map((para)=>{
                  return   <CoffeCard key={para.id} src={para.images} title={para.name} onClick={()=>selectedTitle(para)} className='flex flex-col items-center gap-2  hover:bg-gray-600 transition-all hover:text-white ' />
              })}                     
              </div>
             

       </div>
    
       </div>



       {/* frappee */}

<div ref={coffeeRef} className=' flex justify-center'>

       <div  className=' flex flex-col  pb-[5%]'>
   <h1 className='font-bold text-[50px] text-amber-800'>FRAPEE</h1>
              <div className=' flex grid grid-cols-4'>
 {frapeeSeries.map((para)=>{
                  return   <CoffeCard key={para.id} src={para.images} title={para.name} onClick={()=>selectedTitle(para)} className='flex flex-col items-center gap-2  hover:bg-gray-600 transition-all hover:text-white ' />
              })}                     
              </div>
             

       </div>
    
       </div>
      


</div>
      

  )
}

export default CoffeMenuTable



{/*  Menu 1*/}




 {/* <div ref={coffeeRef} className=''>

           <h1 className='font-bold text-[50px] text-amber-800 '>COFFEE SERIES</h1>
              
              <div className='flex  gap-3 border-b-1 pb-3' >
                     <CoffeCard onClick={()=> selectedTitle(para.name)} src={para.images} title='Kopi Saigon'/>
              <CoffeCard   src='../../public/image/asset/menu-kopi/coffee-series/latte.webp' title='Kopi Latte' onClick={()=> selectedTitle('Kopi Latte')} />
              <CoffeCard   onClick={()=> selectedTitle('Kopi buttercream')} src='../../public/image/asset/menu-kopi/coffee-series/buttercream.webp' title='Kopi buttercream'/>
              <CoffeCard   onClick={()=> selectedTitle('Kopi Hitam')} src='../../public/image/asset/menu-kopi/coffee-series/hitam.webp' title='Kopi Hitam'/>

              </div>


                 <div rel={coffeeRef} className='flex  gap-3 mt-4 border-b-1 pb-3'>
                     <CoffeCard src='../../public/image/asset/menu-kopi/coffee-series/mocha.webp' title='Kopi Mocha'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/coffee-series/vanilla.webp' title='Kopi Vanilla'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/coffee-series/caramel.webp' title='Kopi Caramel'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/coffee-series/butterscotch.webp' title='Kopi Butterscotch'/>

              </div>

</div>
 */}



{/* Menu 2 */}
{/* 
<div ref={nonCoffeeRef} className='b'>

           <h1 className='font-bold text-[50px] text-amber-800 max-w-[500px]'>NON COFFEE SERIES
MATCHA</h1>
              
              <div  className='flex  gap-3 border-b-1 pb-3'>
                     <CoffeCard src='../../public/image/asset/menu-kopi/Non-Coffee-Series-Matcha/Matcha-ori.webp' title='Matcha Original'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/Non-Coffee-Series-Matcha/matcha-strawberry.webp' title='Matcha Strawberry'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/Non-Coffee-Series-Matcha/Matcha-Coconut-1024x1024.webp' title='Matcha Coconut'/>

              </div>

</div> */}

{/* Menu 3 */}



{/* <div className=''>

           <h1 className='font-bold text-[50px] text-amber-800 '>CHOCOLATE</h1>
              
              <div className='flex  gap-3 border-b-1 pb-3'>
                     <CoffeCard src='../../public/image/asset/menu-kopi/Chocolate/chocolate-ori.webp' title='Chocolate Original'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/Chocolate/chocolate-caramel.webp' title='Chocolate Caramel'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/Chocolate/chocolate-strawberry.webp' title='Chocolate Strawberry'/>
           

              </div>

</div> */}



{/* Menu 4 */}


{/* <div className=''>

           <h1 className='font-bold text-[50px] text-amber-800 '>VIETNAMESE TEA</h1>
              
              <div className='flex  gap-3 border-b-1 pb-3'>
                     <CoffeCard src='../../public/image/asset/menu-kopi/Vietnamese-Tea/Peach-tea.webp' title='Peach tea'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/Vietnamese-Tea/milk-tea.webp' title='Milk Tea'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/Vietnamese-Tea/jasmine-milk-tea.webp' title='Jasmine Milk Tea'/>
               <CoffeCard src='../../public/image/asset/menu-kopi/Vietnamese-Tea/coconut-milk-tea.webp' title='Coconut Milk Tea'/>
           


              </div>

</div> */}


{/* Menu 5 */}
{/* <div className=''>

           <h1 className='font-bold text-[50px] text-amber-800'>TARO</h1>
              
              <div className='flex  gap-3 border-b-1 pb-3'>
                     <CoffeCard src='../../public/image/asset/menu-kopi/Taro/creamy-taro.webp' title='Creamy Taro'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/Taro/matcha-taro.webp' title='Matcha Taro'/>
           


              </div>

</div> */}



{/* Menu 6 */}

{/* 
<div ref={frappeRef} className=''>

           <h1 className='font-bold text-[50px] text-amber-800 '>FRAPPE SERIES</h1>
              
              <div className='flex  gap-3 border-b-1 pb-3'>
                     <CoffeCard src='../../public/image/asset/menu-kopi/Frappe-Series/strawberry-frappe.webp' title='Strawberry Milkshake'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/Frappe-Series/saigon-frappe.webp' title='Kopi Saigon'/>
               <CoffeCard src='../../public/image/asset/menu-kopi/Frappe-Series/chocolate-frappe.webp' title='Chocolate'/>
                <CoffeCard src='../../public/image/asset/menu-kopi/Frappe-Series/matcha-frappe.webp' title='Matcha'/>
           
              </div>

               <div className='flex  gap-3 mt-4 pb-3'>
                     <CoffeCard src='../../public/image/asset/menu-kopi/Frappe-Series/butterscotch-frappe-1024x1024.webp' title='Kopi Butterscotch'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/Frappe-Series/caramel-frappe.webp' title='Kopi Caramel'/>
              <CoffeCard src='../../public/image/asset/menu-kopi/Frappe-Series/taro-frappe.webp' title='Taro'/>
           


              </div>

</div> */}




           
             
       //    </div>


