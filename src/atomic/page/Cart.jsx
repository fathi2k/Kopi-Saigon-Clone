import React from 'react'
import Navbar from '../organism/Navbar'
import TableCart from '../organism/TableCart'
import { useState } from 'react'
const Cart = ({title}) => {
  return (
<>

   <Navbar/>


    <div className='bg-red-200 flex justify-center flex-col items-center'>
          <h1>Checkout</h1>


          <TableCart title ={title}/>

    </div>  

</>
     
  )
}

export default Cart
