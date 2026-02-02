import React, { forwardRef } from 'react'

const Input = forwardRef(
  ({type,placeholder,...rest}, ref) => {
  return (
    <div>
          <input placeholder={placeholder}  className='bg-gray-100 w-full h-[48px] p-[16px]' type={type} {...rest}  ref={ref} required />
    </div>
  )
}

)

export default Input





