import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import Gifts from './Gifts.tsx'
// import Two_wayBinding from './Two_wayBinding.tsx'
// import ToDoList from './ToDoList.tsx'
import Content from './Content.tsx'
import User_useEffect from './User_useEffect.tsx'
import CountDown from './CountDown.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <CountDown/>
      {/* <App />
      <Gifts/>
      <Two_wayBinding/>
      <ToDoList/>*/}
      <Content/> 
      <User_useEffect/>
    </>
  </StrictMode>,
)
