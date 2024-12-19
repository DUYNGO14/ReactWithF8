import { useState, useEffect, useRef } from "react";

function UseRef() {
    const [count, setCount] = useState(60);
    const timerId = useRef()
    // useEffect(() => {
        
    // },[count])
    const handleStart= ()=>{
        timerId.current = setInterval(() => {
            setCount(prev => prev-1)
        }, 1000);
    }
    const handleStop = () => {
        clearInterval(timerId.current);  
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600" onClick={handleStart}>Start</button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600" onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRef