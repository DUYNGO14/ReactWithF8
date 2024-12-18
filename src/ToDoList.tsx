import { useState } from "react";

function ToDoList() {
    const [job, setJob] = useState(''); 
    const [jobs, setJobs] = useState(()=>{
        const storageJobs = JSON.parse(localStorage.getItem('Jobs'));
        return storageJobs || [];
    });
    const handlerSubmit = () =>{
        setJobs(prev => {
            const newJobs = [...prev,job];
            localStorage.setItem('Jobs',JSON.stringify(newJobs));
            return newJobs
        });
        setJob('');
    };

    const handlerDelete = (id) => {
        setJobs(prev=> {
            const newJobs = prev.filter((job,index) => index !== id);
            localStorage.setItem('Jobs',JSON.stringify(newJobs));
            return newJobs
        })   
    };
    return (
        <div>
            <h1>ToDoList</h1>
            <input 
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className=" w-full max-w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button  
            onClick={handlerSubmit} 
            className="p-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600">
                Add
            </button>
            <ul>
                {jobs.map((job,index) => (
                    <li key={index}>{job} <button onClick={() => handlerDelete(index)}>Delete</button> </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList;