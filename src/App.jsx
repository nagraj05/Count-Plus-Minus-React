import { useState } from "react"

export default function App(){
  const [count, setCount] = useState(0)

  function add(){
    setCount(prevState => prevState+1)
  }

  function substract(){
    setCount(prevState => prevState-1)
  }

  return(
      <div className="counter">
        
        <button className="counter--minus" onClick={substract}>-</button>
        <div className="counter--count">
        <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={add}>+</button>
      </div>
  )
}