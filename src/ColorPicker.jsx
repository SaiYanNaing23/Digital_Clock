import React, { useState } from 'react'


const ColorPicker = () => {
    const [ color, setColor ] = useState("#fff");
    const onChangeColor = (e) =>{
        console.log("color : ", e.target.value)
        setColor(e.target.value)
    }
  return (
    <div className='container' >
      <h1>Color Picker</h1>
      <div className='display-color' style={{backgroundColor : color}} >    
      </div>
        <p>Selected Color : {color}</p>
      <h3>Select a Color : </h3>
      <input type="color" value={color} onChange={onChangeColor} />
    </div>
  )
}

export default ColorPicker
