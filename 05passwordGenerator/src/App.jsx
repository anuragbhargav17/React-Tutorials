import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const[length,setLength]=useState(8)
  const[numAllowed,setNumAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

  const passwordRef= useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed)str+="0123456789"
    if(charAllowed)str+="!@#%$&*{}[]~-+=^_"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);//optional


    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])



  return (
    <>
    {/* <h1 className="text-4xl text-center">Password Generator</h1> */}
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-4 mt-10 mb-8 text-orange-500 bg-gray-800'>
    <h1 className="text-4xl text-center">Password Generator</h1>

      <div className='className=flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
        value={password}
        //style={{ width: '90%', height: '60px' }}
        className='outline-none w-full py-1 px-3 px-6 py-4 mt-10 mb-8'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-green-800 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700'>COPY</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
           type="range"
           min={6}
           max={100}
           value={length}
           className='cursor'
           onChange={(e)=>{setLength(e.target.value)}}/>          
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={()=>{
            setNumAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>        
      </div>
    </div>

    </>
  )
}

export default App
