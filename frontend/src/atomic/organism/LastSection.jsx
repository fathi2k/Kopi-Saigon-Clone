import React from 'react'
import CardLastSection from './CardLastSection'

const LastSection = () => {
  return (
    <div className=' bg-[#F3E8D7] '>
              <h1 className='text-[80px] text-yellow-400 pl-[18%] mb-[5%] font-bold'>What's Happening ? </h1>

              <div className=' flex justify-center gap-[5%]'>
                <CardLastSection src='https://kopisaigon.com/wp-content/uploads/2026/02/hq-iftar-600x750.jpeg.webp' title='Majlis Berbuka Puasa Team Saigon 2026'  date='February 27, 2026'/>
                <CardLastSection src='https://kopisaigon.com/wp-content/uploads/2026/02/Winner-JKDU--600x400.jpeg.webp' title='Dari Secawan Kopi ke Tanah Suci' date='February 9, 2026'/>
                <CardLastSection src='https://kopisaigon.com/wp-content/uploads/2026/02/Poster-Sustenance-Kachaw-3-600x750.jpg.webp' title='Kachaw Kini Boleh Didapati Secara Online' date='February 6, 2026'  />
              </div>


        <img src="https://kopisaigon.com/wp-content/uploads/2025/07/bg-licensing-bottom.png.webp" alt="" />


    </div>
  )
}

export default LastSection
