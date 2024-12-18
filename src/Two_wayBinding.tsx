import { useState } from "react";

//Response api 
const data = [
    {
        id: 1,
        name: 'John Doe1',
        email: 'n2CpF1@example.com'
    },
    {
        id: 2,
        name: 'John Doe2',
        email: 'n2CpF2@example.com'
    },
    {
        id: 3,
        name: 'John Doe3',
        email: 'n2CpF3@example.com'
    }

]
function Two_wayBinding() {

    const [name, setName] = useState('');
    const [emmail,setEmail] = useState('');

    const [checkedRadio, setCheckedRadio] = useState(2);
    const [checkeBox, setCheckedBox] = useState([]);
    const handleSubmit = () => {
        //call api
        console.log({name,emmail,checkedRadio,checkeBox})
    }
    const handleCheck = (id) => {
        setCheckedBox(prev => {
            const isChecked = checkeBox.includes(id);
            if (isChecked) {
                //uncheck
                return checkeBox.filter(item => item !== id)
            }else{
                return [...prev,id]
            }
        })
    }
    return (
        <div className="p-8">
            {data.map(item => (
                <div key={item.id}>
                    <input 
                        type="radio" 
                        checked={checkedRadio === item.id}
                        onChange={() => setCheckedRadio(item.id)}
                    />
                    {item.name}
                </div>
            ))}
            <hr/>
            {data.map(item => (
                <div key={item.id}>
                    <input 
                        type="checkbox" 
                        checked={checkeBox.includes(item.id)}
                        onChange={() => handleCheck(item.id)}
                    />
                    {item.name}
                </div>
            ))}
            <input 
                onChange={e => setName(e.target.value)} 
                value={name}
                placeholder="Enter your text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input 
                onChange={e => setEmail(e.target.value)} 
                value={emmail}
                placeholder="Enter your text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button onClick={handleSubmit}  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600">
                Register
            </button>
        </div>
    )
}
export default Two_wayBinding;