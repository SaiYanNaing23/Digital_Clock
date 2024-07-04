import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count , setCount] = useState(0)
    const onIncreaseCount = () =>{
        setCount(prevCount => prevCount + 1)
    }
    const onDecreaseCount = ()=>{
        if(count !== 0)setCount(prevCount => prevCount - 1)
    }
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={onIncreaseCount} >Increase Count</button>
      <button onClick={onDecreaseCount} >Decrease Count</button>
    </div>
  )
}

export default Counter
