import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {
  let [text, setText] = useState("");
  let [list, setList] = useState([]);
  let [toggle, setToggle] = useState(false);
  function submitHandler() {
    if (!toggle) {
      let obj = { id: Math.random(), text, completed: false };
      setList(pre => [...pre, obj]);
      setText("")
    }
    else {
      setList(pre => pre.map(todo => {
        if (todo.id == toggle) {
          return { ...todo, text }
        }
        return todo
      }))
      setToggle(false)
      setText("")
    }
  }
  function deleteHandler(id) {
    setList(pre => pre.filter(todo => todo.id !== id));
  }
  function editHandler(id, inputText) {
    setToggle(id);
    setText(inputText);
  }
  function checkBoxHandler(e, id) {
    if (e.target.checked) todo(id)
    else todo(id)
  }
  function todo(id) {
    setList(pre => pre.map(todo => {
      if (todo.id == id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    }))
  }
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h3>Todo List</h3>
        <TodoInput text={text} setText={setText} submitHandler={submitHandler} toggle={toggle} />
      </div>
      <TodoList list={list} deleteHandler={deleteHandler} editHandler={editHandler} checkBoxHandler={checkBoxHandler} />
    </>
  )
}
