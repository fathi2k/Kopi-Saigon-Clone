import React from 'react'
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'


const Navkanan = () => {
  return (
    <div className='flex justify-between w-[70px]'>
       <a href="/login"><UserIcon className='h-[21px] w-[24px] '/></a> 
       <a href="/cart"><ShoppingBagIcon className='h-[21px] w-[24px] '/></a> 
    </div>
  )
}

export default Navkanan
