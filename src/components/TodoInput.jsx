import React from 'react'

export default function TodoInput({text,setText,submitHandler}) {
  return (
    <div style={{display:"flex"}}>
    <input type="text" placeholder='enter task' className=' form-control p-2' style={{borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px",width:"300px"}} value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={submitHandler} className=' btn btn-primary' style={{borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}}>Add</button>
    </div>
  )
}
