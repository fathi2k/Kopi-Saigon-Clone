import React from 'react'

const Pic = ({src,className}) => {
  return (
    <div>
          <img className={className} src={src}  />
    </div>
  )
}

export default Pic
