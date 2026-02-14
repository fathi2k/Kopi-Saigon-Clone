import React, { useEffect, useEffectEvent, useState } from 'react'
import ButtonMenu from '../atoms/Buttons/ButtonMenu'
import Navbar from '../organism/Navbar'
import CoffeMenuTable from '../organism/CoffeMenuTable'
import CoffeCard from '../molecules/CoffeCard'
import { useRef } from 'react'
import Footer from '../organism/Footer'
import { useSearchParams } from 'react-router-dom'

const Menu = () => {


  const coffeeRef = useRef(null)
  const nonCoffeeRef = useRef(null)
  const frappeRef = useRef(null)

  const[ selectedCoffee,setSelectedCoffee] = useState([]);
  
  const [searchParams,setSearchParams] = useSearchParams('');

  const handleSelectedCoffee = (items)=>{
  
      const updatedSelected = [...selectedCoffee,items]
      setSelectedCoffee(updatedSelected)

      //save local//
      localStorage.setItem('dataCofee',JSON.stringify(updatedSelected));
    console.log(updatedSelected)

      
  }


  useEffect(()=>{
      const data =  localStorage.getItem('dataCofee')
      if (data){
    const updatedData = JSON.parse(data) //tukar daripada string kpd object

    
      if (updatedData.length > 0){
            setSelectedCoffee(updatedData)
        }
      }

      console.log(selectedCoffee)
  },[])


//   const autoScrolling = (ref)=>{
//     ref.current.scrollIntoView({
//       behavior : 'smooth'
//     })
//   }


// // scrolling TOP//

// const scrollTop = (ref)=>{
//     window.scrollTo({
//       top:0,
//       left:0,
//       behavior:'smooth'
//     })
// }



const handleClickSort = (valueSort)=>{
    searchParams.set('category',valueSort)
    setSearchParams(searchParams)
}

  return (
    <>
     <Navbar />

    <div className=' flex justify-center gap-3 mt-[7%]'>
          
          {/* kiri */}
          <div className=' flex flex-col items-center pt-[2%] fixed left-0'>
          <ButtonMenu onClick={()=>{handleClickSort('coffee-series')} }>COFFEE SERIES</ButtonMenu>
          <ButtonMenu onClick={()=>  {handleClickSort('non-coffee-series')} }>NON COFFEE SERIES</ButtonMenu>
          <ButtonMenu onClick={()=> {handleClickSort('frappe-series')} }>FRAPPE SERIES</ButtonMenu>
            <p className='text-gray-500 text-[13px]'>* Products shown are for illustration purposes only</p>
          </div>

          {/* kanan */}

        <CoffeMenuTable 
        coffeeRef={coffeeRef}
        nonCoffeeRef={nonCoffeeRef}
        frappeRef={frappeRef}
        selectedTitle={handleSelectedCoffee}
    
        

        />

    </div>

        <Footer/>
    
    </>
   
  )
}

export default Menu
