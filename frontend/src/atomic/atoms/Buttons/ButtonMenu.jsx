import React, { Children } from 'react'

const ButtonMenu = ({children,onClick,ref}) => {
  return (
    <div className='m-1'>
            <button ref={ref} onClick={onClick} className='bg-amber-900 text-white px-3 w-[340px] rounded-2xl py-2 text-[25px]'>{children}</button>
    </div>
  )
}

export default ButtonMenu
