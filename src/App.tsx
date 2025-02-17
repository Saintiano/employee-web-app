import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Login from './screens/login/login'
import SignUp from './screens/sign_up/sign_up'
import Home_Page from './screens/home/home_page'
import Home_Page_Two from './screens/home/home_page_2'
import Dashboard from './screens/dashboard/dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' index element={<Home_Page/>}/>
      <Route path='login' index element={<Login/>}/>
      <Route path='signUp' element={<SignUp/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='home_page' element={<Home_Page/>}/>
      <Route path='home_page_two' element={<Home_Page_Two/>}/>
    </Route>
  )
)

function App() {

  return (
    <>

      <RouterProvider router={router}/>

    </>
  )
}

export default App
