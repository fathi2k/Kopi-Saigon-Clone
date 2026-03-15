import React from 'react'

const CardLastSection = ({src,title,date}) => {
  return (
    <div className=' relative mb-2 h-[547px] rounded-[30px] shadow-lg w-[360px] hover:shadow-2xl transition-all duration-400 cursor-pointer bg-white'>
             <img className='h-[307px] w-full rounded-t-[30px]' src={src} alt="" />
             <img className='h-15 h-15 rounded-full absolute bottom-[38%] ml-7'  src='https://secure.gravatar.com/avatar/85c832dc01cb51c30343ea57636279d5b51080b17ee665c15f3cab7e03d82955?s=128&d=mm&r=g' alt="" />


             <div className='flex flex-col justify-around h-[240px]  '>

    <div className='mt-6'>
              <h1 className='text-[21px] max-w-[230px] font-bold text-[#54595F] pl-3'>{title}</h1>
             </div>



          <div className='border-b border-b-gray-300 pb-2 '>
                  <p className='text-yellow-500 text-[12px] pl-4'>Read More »		</p>
          </div>
           

            <div>
               <p className='text-[12px] text-gray-400 pl-4'>{date}</p>
            </div>

           

             </div>
         
    </div>
  )
}

export default CardLastSection
