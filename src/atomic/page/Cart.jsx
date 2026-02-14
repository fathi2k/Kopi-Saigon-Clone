import React from 'react'
import Navbar from '../organism/Navbar'
import TableCart from '../organism/TableCart'
import { useState } from 'react'
const Cart = ({title}) => {
  return (
<>

   <Navbar/>


    <div className='bg-red-200 flex justify-center flex-col items-center'>

    {/* kiri */}








      {/* kanan */}

      <div className='bg-kopi-saigon mt-[5%] p-4 rounded-2xl'>
                <h1 className='text-[60px] font-bold text-white'>Checkout</h1>



          <TableCart title ={title}/>

      </div>
        
    </div>  

</>
     
  )
}

export default Cart
