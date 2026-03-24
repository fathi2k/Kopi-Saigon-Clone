import React from 'react'

const Pic = ({src,className}) => {
  return (
    <div>
          <img className={className} src={src}  referrerPolicy="no-referrer" />
    </div>
  )
}

export default Pic
