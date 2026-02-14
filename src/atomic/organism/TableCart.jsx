import React from 'react'
import CoffeCard from '../molecules/CoffeCard'
import { useState ,useEffect} from 'react'
import { json } from 'zod';





const TableCart = () => {


  const [cartItems ,setCartItem] = useState([]);

// ambil data dari api
  useEffect(()=>{
      const savedCart = JSON.parse(localStorage.getItem('dataCofee')|| '[]') 
        setCartItem(savedCart)

      
  },[])

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



  // }


  return (


    <div>
            <table className='border rounded- w-[600px] text-center'>
              <thead>
   <tr className='b border '>
                      <th className='border'>Id</th>
                      <th className='border'>Nama</th>
                      <th className='border'>Kuantiti</th>

                      <th className='border'>Harga</th>
                      <th className='border'>Total Harga</th>

                      
                    </tr>
              </thead>

              <tbody className='border-r-1 '>

              {cartItems && (
                  
                cartItems.map((items)=>(

                      <>
                        <tr className='border'>
                          <td>{items.id}</td>
                          <td className='border-x-1'>{items.name}</td>
                          <td className='border-x-1'>
                            <div className='flex justify-around'>
                              <button onClick={()=> handleTambah(items.id)}>+</button>
                                      <span>{items.kuantiti || 1}</span>
                              <button onClick={()=>handleTolak(items.id)} >-</button>
                            </div>
                          </td>

                          <td className='border'>{items.price}</td>
                        
                        </tr>

                      
                        
                      </>
                   
                )) 
                  
                 
                  

              ) }
              

               
              
                 
              </tbody>
            </table>
    </div>
  )
}

export default TableCart
