import { useState } from "react";



export const useValidation = ()=>{
  const [userNameInput,setUserNameInput] = useState('')
  const [passwordInput,setPasswordInput] = useState('')

  //handle Error //

  const [userNameErrorMesej,setUserNameErrorMesej] = useState('');
  const [passwordErrorMesej,setPasswordErrorMesej] = useState('');

  //validate//

  const userNameVali = userNameInput.length < 10 ;
  const passwordVali = userNameInput.length < 8 ;


  const handleClick = (e)=>{
      if (userNameVali){
        setUserNameErrorMesej('Username mesti sekurang-kurangnya 10 aksara')

        
      }

  

       if(passwordVali){
        setPasswordErrorMesej('Username mesti sekurang-kurangnya 8 aksara')


     
      }


      alert('submit')


        e.preventDefault()
      return

     
  }

  return{
   userNameInput,
    setUserNameInput,
    handleClick,
    passwordInput,
    setPasswordInput,
    userNameErrorMesej,
    passwordErrorMesej

  }
}



