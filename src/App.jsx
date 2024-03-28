import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routs } from './Routes/Routs/Routs'

function App() {


  return (
    <div className='App'>
      <RouterProvider router={routs}></RouterProvider>
    </div>
  )
}

export default App
