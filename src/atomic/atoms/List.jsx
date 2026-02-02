import React from 'react'

const List = ({children,href,onClick}) => {
  return (
    <div>
            <a className='font-bold' href={href} onClick={onClick} >{children}</a>
    </div>
  )
}




export default List
