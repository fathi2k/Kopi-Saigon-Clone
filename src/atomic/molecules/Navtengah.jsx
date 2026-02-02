import React from 'react'
import List from '../atoms/List'

const Navtengah = ({gotoScroll,targetRef,onClick}) => {



  
  return (
    <div className=' flex gap-[20px] text-yellow-900 ml-[60px] mr-[30px] p-10'>
      
            <List href='/menu' onClick= {onClick}>MENU</List>
            <List>OUTLETS</List>
            <List>LICENSING</List>
            <List href='/test'>ABOUT US</List>
            <List>NEWSROOM</List>
            <List>CAREER</List>
            <List>CONTACT US</List>

    </div>
  )
}

export default Navtengah
