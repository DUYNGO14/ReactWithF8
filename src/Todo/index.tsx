import { useReducer, useRef} from "react";
import reducer, { initState } from "./reducre";
import { addJob, removeJob, setJob } from "./Action";
import logger from "./logger";
function UseReducerWithTodoApp() {
    const [state, dispatch] = useReducer(logger(reducer),initState);
    const inputRef = useRef();
    const {job,jobs} = state
    const handlerSubmit = () =>{
        dispatch(addJob(job));
        dispatch(setJob(''));

        inputRef.current.focus();
    }
        
    return(
        <div>
            <h3>ToDo</h3>
            <input 
                ref={inputRef}
                value={job}
                placeholder="Enter todo..." 
                className="border border-black"
                onChange={(e) => 
                    dispatch(
                        setJob(e.target.value)
                )}
            />
            <button 
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600"
                onClick={handlerSubmit}
            >
                    Add
            </button>
            <ul>
                {jobs.map((job,index) => (
                    <li key={index}>{job} 
                    <span onClick={() => dispatch(removeJob(index))}> &times;</span>
                    </li>))}
            </ul>
        </div>
    )
}

export default UseReducerWithTodoApp