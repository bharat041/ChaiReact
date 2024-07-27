import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  let myObj = {
    username: "bharat",
    age: 21
  }

  let newArr = [1,2,3]
  return (
    <>

    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1> <br />

    <Card username="Bharat"  btnText = "click me"/> <br />
    <Card username = "Bkg" />
    </>
  )
}

export default App
