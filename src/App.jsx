import { useState } from "react"
import Count from './count'

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
        <Count  number ={count}/>
        <button className="counter--plus" onClick={add}>+</button>
      </div>
  )
}