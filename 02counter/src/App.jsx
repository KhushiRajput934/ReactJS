import { useState } from 'react';
import './App.css'


function App() {

  let [counter, setcounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    if (counter < 25) {
      setcounter(counter +1)
    } 
    // console.log("value added");
    // counter = counter + 1
    // setcounter(counter)
  }

  const removeValue = () => {
    if (counter > 0){
      setcounter(counter - 1)
    }
    // console.log('value removed');
    // counter = counter - 1
    // setcounter(counter)
  }
  
  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value</button>
      <br />
      <br />
      <button
       onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
