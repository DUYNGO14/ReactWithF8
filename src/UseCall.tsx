import { useState, useCallback, useEffect } from "react";
import  HiF8  from './HiF8.tsx'
//1. useCallback: tránh tạo ra hàm mới không cần thiết trong function component
//- Reference types
// - React memo()
// Dùng useCallBack() khi có sử dụng useMemo() trong component con
function UseCallBack() {
    const [count, setCount] = useState(0);
    const handleIncrease = useCallback( ()=>{
        setCount(prev=>prev+1)
    },[])
    return (
        <div>
            <HiF8 onIncrease ={handleIncrease}/>
            <h1>{count}</h1>
            
        </div>
    )
}

export default UseCallBack