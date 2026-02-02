import { useState,useRef,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gsap from 'gsap'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Navbar from './atomic/organism/Navbar';
import SVGIcon from './assets/react.svg?react'
import Header from './atomic/organism/Header';
import PackageCard from './atomic/organism/Package';
import Br1 from './atomic/organism/Br1';



function App() {
 

  return (
      <>
      
      
      <Navbar/>
      <Header/>
      {/* BREAK SECTION */}
      <Br1/>
      <PackageCard/>

      <div className='mt-[10%]'></div>
      
      
      </>
           
  )
}

export default App
