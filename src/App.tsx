import { useState } from 'react'

function App() {
  const [info, setInfo]= useState({
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
  })

  const updateInfo = () => {
    setInfo(prev => {
      //logic
      return {
        ...prev,
        bio: 'Hello World'
      }
    })
  }

  return (
    <div className='p-8'>
      <h1 >{JSON.stringify(info)}</h1>
      <button onClick={updateInfo}>Update Info</button>
    </div>
  )
}

export default App
