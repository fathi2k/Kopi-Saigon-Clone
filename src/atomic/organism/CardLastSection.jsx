import React from 'react'

const CardLastSection = ({src,title,date}) => {
  return (
    <div className=' relative mb-2 h-[502px] rounded-[20px] shadow-2xl'>
             <img className='h-[267px] w-[360px] rounded-t-2xl' src={src} alt="" />
             <img className='h-15 h-15 rounded-full absolute bottom-[42%] ml-7'  src='https://secure.gravatar.com/avatar/85c832dc01cb51c30343ea57636279d5b51080b17ee665c15f3cab7e03d82955?s=128&d=mm&r=g' alt="" />


             <div className='flex flex-col justify-around h-[240px] pl-5 '>

    <div className='mt-6'>
              <h1 className='text-[21px] max-w-[210px] '>{title}</h1>
             </div>



          <div>
                  <p className='text-yellow-500 text-[12px]'>READ MORE </p>
          </div>
           

            <div>
               <p className='text-[12px] text-gray-400'>{date}</p>
            </div>

           

             </div>
         
    </div>
  )
}

export default CardLastSection
