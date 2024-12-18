import { useState } from 'react'

const gifts =[
    'CPU i9',
    'CPU i7',
    'CPU i5',
]
function Gifts() {
    const [gift, setGift] = useState<string | undefined>('')
    const ramdomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index]);
    }
    return (
        <div className='p-8'>
            <h1>{gift || 'Chưa lấy thưởng'}</h1>
            <button onClick={ramdomGift} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600">
                Gradient Button
            </button>
        </div>
    )
}
export default Gifts;