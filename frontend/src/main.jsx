import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Outlet, RouterProvider,createBrowserRouter } from 'react-router-dom'
import Menu from './atomic/page/Menu.jsx'
import HomePage from './atomic/page/HomePage.jsx'
import LoginPage from './atomic/page/LoginPage.jsx'
import Cart from './atomic/page/Cart.jsx'
import OutletsPage from './atomic/page/OutletsPage.jsx'
import RegisterPage from './atomic/page/RegisterPage.jsx'


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


    path : '/register',
    element : <RegisterPage/>


  },{
    path:'/cart',
    element : <Cart/>
  },{
    path : '/outlets',
    element : <OutletsPage/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerr}/>
  </StrictMode>,
)
