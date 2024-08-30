import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)//HOOKS
  //parameter me kuch bhi pass ho skta h '',fn,variable,[]

  //let counter=15

  const addValue =()=>{
    if(counter<20){
    console.log("before clicked",counter);
    
    //counter++;
    setCounter(++counter)
    console.log("After clicked",counter);
    //console.log("Value Added",Math.random());
  }
}

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
      console.log("Value Removed",counter)
  
      console.log("Value After Removing",counter-1)
  
    }
  }
  return (
    <>
      {
      <div>
      <h1>Anurag Bhargav</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>Footer: {counter}</p>
      </div>
      /*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
