import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState('')
// useRef
const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,numberAllowed,charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    
    // use of ref
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,4)

    window.navigator.clipboard.writeText(Password) 
  },[Password])

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed])
  


  return (
    <>
    <div className=" text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex shadow overflow-hidden mb-4">
        <input ref={passwordRef} type="text" value={Password} className='outline-none w-full py-1 px-3 my-3' placeholder='password' readOnly/>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 shrink-0'>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className='flex items-center gap-x-1'>
          <input type="range" min={11} max={20} value={length} className='cursor-pointer' onChange={e=>{setLength(e.target.value)}}/>
          <label>Lenth:{length}</label>
        </div>
        
        <div className='flex items-center gap-x-1'>
          <input id='numberInput' type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
          <label htmlFor="numberInput">Number</label>
        </div>
        
        <div className='flex items-center gap-x-1'>
          <input id='charInput' type="checkbox" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
          <label htmlFor="charInput">character</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
