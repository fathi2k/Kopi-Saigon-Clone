import React from 'react'

const Label = ({children,htmlFor}) => {
  return (
    <div>
         <label className='' htmlFor={htmlFor}>{children}</label>
    </div>
  )
}

export default Label
