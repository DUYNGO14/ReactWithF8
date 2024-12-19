import { useReducer, useRef} from "react";
//init state
const initState = {
    job: '',
    jobs: [],
}
//actions
const SET_JOB = 'setJob';
const ADD_JOB = 'add_job';
const REMOVE_JOB = 'remove_job';

const setJob = payload => ({type:SET_JOB,payload});
//Redeucer
const reducer = (state,action) =>{
    switch(action.type){
        case SET_JOB:
            return {...state,job:action.payload};
        case ADD_JOB:
            return {...state,jobs:[...state.jobs,action.payload]};
        case REMOVE_JOB:
            return {...state,jobs:state.jobs.filter((job,index) => index !== action.payload)};
        default:
            throw new Error('Invalid action');
    }
}
function UseReducerWithTodoApp() {
    const [state, dispatch] = useReducer(reducer,initState);
    const inputRef = useRef();
    const {job,jobs} = state
    const handlerSubmit = () =>{
        dispatch({type:ADD_JOB,payload:job});
        dispatch({type:SET_JOB,payload:''});

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
                    <span onClick={() => dispatch({type:REMOVE_JOB,payload:index})}> &times;</span>
                    </li>))}
            </ul>
        </div>
    )
}

export default UseReducerWithTodoApp