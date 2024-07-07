import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {
  let [text,setText]=useState("");
  let [list,setList]=useState([]);
  function submitHandler(){
    let obj={id:Math.random(),text};
    setList(pre=>[...pre,obj]);
    setText("")
  }
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h3>Todo List</h3>
      <TodoInput text={text} setText={setText} submitHandler={submitHandler}/>
    </div>
      <TodoList list={list}/>
    </>
  )
}
