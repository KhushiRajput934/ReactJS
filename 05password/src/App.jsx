import { useState } from 'react'

import { useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(()=> {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$%^&*_'
    }

    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  return (
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-900">
    <h1 className="text-4xl text-center mb-6">Password Generator</h1>

    {/* Password Display */}
    <div className="flex items-center bg-slate-800 rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-2 px-3 bg-white text-black"
        placeholder="Password"
        readOnly
      />
      <button className='outline-none text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}/>
          <label >Length: {length}</label>
        </div>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numAllowed}
        id='numberInput'
        onChange={ ()=> { setNumAllowed((prev)=> !prev)}}
        />
      </div>
    </div>
  );
}

export default App
