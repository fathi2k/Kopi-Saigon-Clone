import React from 'react'

const List = ({children,href,onClick}) => {
  return (
    <div>
            <a className='font-bold hover:border-b-3 cursor-pointer duration-[0.16s] transition-all' href={href} onClick={onClick} >{children}</a>
    </div>
  )
}




export default List
