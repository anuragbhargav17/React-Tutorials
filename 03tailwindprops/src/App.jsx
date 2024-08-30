import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    name:"Anurag",
    age:21
  }
  let newArr=[1,2,3];

  return (
    <>
      <div className='bg-green-400 text-black rounded-xl mb-4'>
      <h1>Tailwind Css</h1>
      </div>
      <Card username="ChaiAurCode" btnText="Click Here!"/>
      <Card username="Anurag" btnText="Visit to Explore"/>
    </>
  )
}

export default App
