import { useState, useReducer } from "react";
// useState
//1. Init state : giá trị khởi tạo
//2. Action : hành động thay đổi giá trị

//useReduce
//1. Init state : giá trị khởi tạo
//2. Action : hành động thay đổi giá trị
//3. Reducer 
//4. Dispatch

//Init state
const initState = 0;
//Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
//Reducer
const reducer=(state,action)=>{
    switch(action){
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action');
    }
}
//Dispatch

function UseReduce() {
    //const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer,initState);
    return(
        <div>
            <h1>{count}</h1>
            <button 
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600" 
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button 
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600" 
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>   
        </div>
    )
}
export default UseReduce