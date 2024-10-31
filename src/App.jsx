import React, { useState } from 'react'
import './App.css'

const App = () => {
  const[count, setCount] = useState(0)

  const increaseCount = ()=>{
    setCount(count +1);
  }
  const decreaseCount = ()=>{
    setCount(count -1);
  }

  const resetCount = ()=>{
    setCount((count)=> count= 0 );
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={resetCount}>reset</button>

      
    </div>
  )
}

export default App
