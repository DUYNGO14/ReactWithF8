import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseMemo1 from './UseMemo.tsx'
import UseReduce from './UseReduce.tsx'
import UseReducerWithTodoApp from './UseReducerWithTodoApp.tsx'
// import App from './App.tsx'
// import Gifts from './Gifts.tsx'
// import Two_wayBinding from './Two_wayBinding.tsx'
// import ToDoList from './ToDoList.tsx'
// import Content from './Content.tsx'
// import User_useEffect from './User_useEffect.tsx'
// import CountDown from './CountDown.tsx'
// import Avatar from './Avatar.tsx'
// import UseRef from './UseRef.tsx'
// import UseCallBack from './UseCall.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      {/* <CountDown/> */}
      {/* <App />
      <Gifts/>
      <Two_wayBinding/>
      <ToDoList/>*/}
      {/* <Content/> 
      <User_useEffect/> */}
      {/* <Avatar/>
      <UseRef/>
      <ReactMemo/> */}
      {/* <UseCallBack/> 
      <UseMemo1/>
      <UseReduce/>*/}
      <UseReducerWithTodoApp/>
    </>
  </StrictMode>,
)
