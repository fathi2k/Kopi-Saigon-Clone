import React, { forwardRef } from 'react'

const Input = forwardRef(
  ({type,placeholder,...rest}, ref) => {
  return (
    <div>
          <input placeholder={placeholder}  className='bg-gray-100 border mt-1 border-gray-400 w-full py-2 px-2 rounded-[7px]' type={type} {...rest}  ref={ref} required />
    </div>
  )
}

)

export default Input





