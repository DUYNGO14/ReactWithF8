import { ADD_JOB, REMOVE_JOB, SET_JOB } from "./Constant";

//init state
export const initState = {
    job: '',
    jobs: [],
}

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

export default reducer