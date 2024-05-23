import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './assets/components/State'
import Input from './assets/strings/Input'
import Dropdown from './assets/strings/Dropdown'
import DarkModeToggle from './assets/strings/DarkModeToggle'
import Counter from './assets/strings/Counter'
import PasswordToggle from './assets/strings/PasswordToggle'

function App() {
 

  return (
    <>
     <State/>
     <Input/>
     <Dropdown/>
     <DarkModeToggle/>
     <Counter/>
     <PasswordToggle/>
    </>
  )
}

export default App
