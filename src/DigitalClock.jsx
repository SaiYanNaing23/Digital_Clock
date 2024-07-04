import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date())
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000)

        return ()=>{
            clearInterval(intervalId)
        }
    },[])
    const functionTime = ()=>{
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let second = time.getSeconds()
        const medirrian = hours >=12 ? 'PM' : 'AM';

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(second)} ${medirrian}`
    }
    function padZero (val){
        return (val < 10 ? '0': '') + val
    }
  return (
    <div className='background-image'>
      <span>{functionTime()}</span>
    </div>
  )
}

export default DigitalClock
