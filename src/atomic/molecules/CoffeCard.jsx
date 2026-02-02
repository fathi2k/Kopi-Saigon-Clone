import React from 'react'

const CoffeCard = (props) => {
  const {src,title, onClick} = props;
  
  return (
    <div onClick={onClick} className='flex flex-col items-center gap-2  hover:bg-gray-600 transition-all hover:text-white'>
        <img className='h-[192px] w-[192px]' src={src}  />
        <h1 className='font-bold'>{title}</h1>
        <img className='h-[30px] w-[70px]' src='../../public/image/asset/menu-kopi/hot-cold.png.webp'  />
    </div>
  )
}

export default CoffeCard
