import React from 'react'

export default function TodoInput({text,setText,submitHandler}) {
  return (
    <div style={{display:"flex"}}>
    <input type="text" placeholder='enter task' value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={submitHandler}>Add</button>
    </div>
  )
}
