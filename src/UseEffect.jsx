import React, { useState } from 'react'

const UseEffect = () => {
    const [count , setCount] = useState(0);

    const onAddCountHandler = () =>{
        setCount(count +1)
    }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={onAddCountHandler} >
        Add
      </button>
    </div>
  )
}

export default UseEffect
