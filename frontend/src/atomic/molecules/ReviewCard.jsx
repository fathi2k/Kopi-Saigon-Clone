import React from 'react'

const ReviewCard = ({src,num,desc}) => {
  return (
    <div className='text-white flex flex-col items-center relative cardReview'>
          <img className='h-[310px] w-[550px] z-10 rounded-2xl pic-review' src={src}  />
          <div className='bg-teal-200 flex  flex-col items-center relative description z-10'>
            <h1 className='text-[89px] font-bold absolute top-[-70px] z-10 review-h1 '>{num}  </h1>
            <p className='text-[19px] absolute w-[300px] top-[40px] left-[-140px]'>{desc}</p>
          </div>
    </div>
  )
}

export default ReviewCard
