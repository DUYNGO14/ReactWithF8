import { useState } from "react";
//1. memo() -> higher Order Component (HOC) : cung cấp tính năng xử lý 1 component tránh việc re-render lại component đó trong những tình huống không cần thiết
//2. useCallBack()

//hooks
//HOC
//Render props : props giúp truyền dữ liệu từ component cha về component con
function ReactMemo() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button 
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600" 
            onClick={increase}
            >
                Click Me!
            </button>
        </div>
    )
}

export default ReactMemo