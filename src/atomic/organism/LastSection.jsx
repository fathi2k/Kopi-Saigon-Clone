import React from 'react'
import CardLastSection from './CardLastSection'

const LastSection = () => {
  return (
    <div className='pb-[10%]'>
              <h1 className='text-[80px] text-yellow-400 pl-[18%] mb-[5%] font-bold'>What's Happening ? </h1>

              <div className=' flex justify-center gap-[5%]'>
                <CardLastSection src='https://kopisaigon.com/wp-content/uploads/2026/01/KACHAW-240x300.jpg.webp' title='Kachaw 3 in 1 : Inovasi Terbaru Kopi Saigon'  date='January 29, 2026'/>
                <CardLastSection src='https://kopisaigon.com/wp-content/uploads/2026/01/sip-200x300.jpg.webp' title='Kopi Saigon: Mix, Sip & Enjoy ' date='January 21, 2026'/>
                <CardLastSection src='https://kopisaigon.com/wp-content/uploads/2026/01/DXC03868-1-281x300.jpg.webp' title='Kenapa Kopi Saigon Jadi Pilihan Generasi Urban Malaysia?' date='January 19,2026'  />
              </div>
    </div>
  )
}

export default LastSection
