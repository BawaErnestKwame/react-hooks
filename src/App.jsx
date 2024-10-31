
import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count => count+1)
    },2000)
  },[count, name])

  return (
    <div>
      <p>I've Rendered {count} times! </p>
      

      
    </div>
  )
}

export default App
