import React from 'react'
import Navbar from '../organism/Navbar'
import TableCart from '../organism/TableCart'
import { useState,useEffect } from 'react'
import Footer from '../organism/Footer'


const Cart = ({title}) => {

    const [cartItems ,setCartItem] = useState([]);


// ambil data dari api
  useEffect(()=>{
      const savedCart = JSON.parse(localStorage.getItem('dataCofee')|| '[]') 
        setCartItem(savedCart)

      
  },[])


  // kira total price///


  const totalPrice  = cartItems.reduce((total,item)=>{
    const price = Number(item.price.replace("RM",""))
    const kuantiti = item.kuantiti || 1
    return total + (price * kuantiti)
  },0)


  // kira total item///

  const jumlahItem = cartItems.reduce((total,item)=>{
    const kuantiti = item.kuantiti || 1
    return total + (kuantiti || 1)
  },0)


 


  return (
<>
   
 <Navbar/>
  
  


    <div className='bg-[#18120b] h-full flex justify-center flex-col items-center p-2'>

    {/* kiri */}








      {/* kanan */}

      <div className='bg-[#18120b]  p-4 rounded-2xl'>
        <div className='flex flex-col '>
                <h1 className='text-[35px] font-bold text-white '>Checkout</h1>
                <p className='text-[#A6874C]'>Kopi Saigon — Tiada Hari Tanpa Kopi</p>
        </div>
             


        <div className='bg-[#3D2A12] py-5  mt-3 rounded-2xl'>
          <h1 className='text-2xl p-2 text-[#A6874C]'>PESANAN KAMU</h1>

          {/* bahagian table cart */}
         <TableCart title ={title} cartItems={cartItems} setCartItem={setCartItem}/>

          <div className='  p-2 border-b-1 border-gray-400 flex flex-col gap-3 py-5 text-[#a18f6d]'>
            <div className=  'flex justify-between px-4 '>
            <h1>Subtotal : {jumlahItem} items </h1>
            <h1>RM 50.00</h1>
            </div>

          


             <div className=' flex justify-between px-4 '>
            <h1>Penghantaran</h1>
            <h1 className='text-green-300'>Percuma</h1>
            </div>


         
          </div>




                 {/* total jumlah */}


            <div className='text-[30px] pt-5 flex  flex-col gap-3'>
                    <div className='flex justify-around'>
                      <h1 className='text-white'>Jumlah Keseluruhan</h1>
                      <h1 className='text-[#A6874C]'>RM {totalPrice.toFixed(2)}</h1>
                    </div>

                    <button className='flex justify-center bg-[#A6874C] mx-3 rounded-2xl py-2 hover:text-white hover:bg-[#725d35] duration-200 '>Sahkan Pesanan</button>
            </div>
 
        </div>



    

      </div>




   
        
    </div> 

    <Footer/> 

</>
     
  )
}

export default Cart
