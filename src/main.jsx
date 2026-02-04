import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Menu from './atomic/page/Menu.jsx'
import HomePage from './atomic/page/HomePage.jsx'
import LoginPage from './atomic/page/LoginPage.jsx'
import Cart from './atomic/page/Cart.jsx'


const routerr = createBrowserRouter([
  {
    path : '/',
    element : <HomePage/>

  },
  {
    path : '/menu',
    element : <Menu/>
  },{

    path : '/menu/:slug',
    element : <Menu/>



  },{

    path:'/login',
    element : <LoginPage/>

  },{
    path:'/cart',
    element : <Cart/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerr}/>
  </StrictMode>,
)
