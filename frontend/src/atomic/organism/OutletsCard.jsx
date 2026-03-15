import React from 'react'

const OutletsCard = ({title,address}) => {
  return (
    <div className='bg-[#F3E8D7] w-[453px] h-[220px]  rounded-br-[80px] rounded-3xl p-3 text-[#783819] flex flex-col '>
            <div>
              <h1 className='font-bold text-[27px] pb-2'>Kopi Saigon - {title}</h1>
            </div>

            <div className='text-[14px] pb-[9%]'>
              <p>{address}</p>
            </div>

            <div>
              <h1>DIRECTION ------</h1>
            </div>
    </div>
  )
}

export default OutletsCard
