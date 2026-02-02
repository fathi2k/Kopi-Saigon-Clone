import React, { forwardRef } from 'react'
import Label from '../atoms/input/Label'
import Input from '../atoms/input/Input'

const InputText = forwardRef(({children,placeholder,...rest},ref)  => {
  return (
    <div>
          <Label>{children}</Label>
          <Input placeholder={placeholder}  {...rest}  ref={ref}/>
    </div>
  )
}

)

export default InputText
