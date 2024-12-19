import { useState, useEffect } from "react";


function CountDown() {
    const [countDown, setCountDown] = useState(180)
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown(prev => prev-1)
        }, 1000)
        return () => clearInterval(timerId)
    },[])
    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )
}

export default CountDown