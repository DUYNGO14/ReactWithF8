import{memo} from 'react'
function HiF8({onIncrease}) {
    return (
        <div>
            Hi F8
            <button 
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600" 
                onClick={onIncrease}
            >Click Me</button>
        </div>
    )
}

export default memo(HiF8)