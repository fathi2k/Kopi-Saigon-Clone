import React from 'react'
import CoffeCard from '../molecules/CoffeCard'
import {  useEffect} from 'react'


import { IoRemoveCircleOutline } from "react-icons/io5";



const TableCart = ({cartItems,setCartItem}) => {






  // setData baru everytime cart berubah//

  useEffect(()=>{

    if (cartItems.length > 0){
      localStorage.setItem('dataCofee',JSON.stringify(cartItems))
    }


  },[cartItems])


  // useEffect(()=>{
  //        console.log(cartItems);
  // },[cartItems])


  //function tambah //

  // const handleTambah = (id)=>{

  //   const updatedCard = cartItems.map((items)=>(
  //     items.id === id ? {...items,qu}
  //   ))


const handleTambah = (id)=>{
   const updateCart =  cartItems.map((para)=>(
      para.id === id ? {...para,kuantiti : (para.kuantiti || 1) + 1} : para
    ))
    

setCartItem(updateCart)
    
}


//function tolak///


const handleTolak = (id)=>{

  const updateCart = cartItems.map((para)=>(
      id === para.id ? {...para,kuantiti:(para.kuantiti || 1) - 1} : para
))  //.filter((para)=> para.kuantiti > 0) //remove semua bila sampai 0

setCartItem(updateCart)

}


// delete function//

  const handleDelete = (id)=>{
    const samaId = cartItems.filter((para)=>(
        para.id !== id
       
    ))

     if (samaId){
        setCartItem(samaId)
        localStorage.setItem('dataCofee',JSON.stringify(samaId))
     }
  }

  // }


  return (


    <div>
            <table className='border-t-1 rounded- w-[700px] text-center'>
              <thead>
   <tr className=''>
                     
                      <th className='p-2 text-[#A6874C]'>MINUMAN</th>
                       <th className='p-2 text-[#A6874C]'>HARGA</th>
                      <th className='p-2 text-[#A6874C] max-w-[100px]'>KUANTITI</th>

                     
                      <th className='p-2 text-[#A6874C]'>SUBTOTAL</th>

                      
                    </tr>
              </thead>

              <tbody className=' '>

              {cartItems.length > 0 ? (
                  
                cartItems.map((items)=>(

                      <>
                        <tr className='border-y-1'>
                         
                          <td className='border-y-1 text-white border-black'>{items.name}</td>
                            <td className='p-2 text-[#a18f6d]'>{items.price}</td>
                          <td className='border-y-1'>
                            <div className='flex justify-around bg-[#3d2a12] text-white  p-2 text-[15px] mx-[15%] my-2 rounded-[10px]'>
                              
                         <button  className='bg-[#A6874C] px-2 rounded-[5px]' onClick={()=> handleTambah(items.id)}>+</button>
                                      <span>{items.kuantiti || 1}</span>
                              <button className='bg-[#A6874C] px-2 rounded-[5px]' onClick={()=>handleTolak(items.id)} >-</button>
                            
                          
                            </div>
                          </td>

                        
                          {/* ni banyak sebab kat api aku letak "RM" sepatutnya guna number je */}
                          <td className='text-[#A6874C]'>RM {(Number(items.price.replace("RM","")) * Number(items.kuantiti || 1)).toFixed(2)}</td>
                          <td>
                            <button  className=' mr-4 p-2  ' onClick={()=>handleDelete(items.id)}>
                              <IoRemoveCircleOutline className='h-[30px] w-[30px] cursor-pointer' />
                            </button>
                            </td>
                        
                        </tr>

                      

                      
                        
                      </>
                   
                )) 
                  
                 
                  

              ) : <td className='bg-kopi-saigon py-5  text-white text-[35px] font-bold' colSpan={4}>Cart Masing Kosong !</td> }
              

               
              
                 
              </tbody>
            </table>
    </div>
  )
}

export default TableCart
