import React from 'react'
const Button = () => {
    const onClickHandler = (e) =>{
        console.log(e)
    }
  return (
    <button onClick={onClickHandler} >
        Click Me !
    </button>
  )
}

export default Button
