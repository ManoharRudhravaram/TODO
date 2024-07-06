import React from 'react'

export default function TodoList({list}) {
  return (
    <div>
        {
            list.length==0 ? <h4>Add Tasks</h4> : list.map((todo)=>{
                return <div key={todo.id} style={{border:"1px solid",width:"300px",display:"flex",justifyContent:"space-evenly",alignItems:"center",margin:"5px"}}>
                    <h3>{todo.text}</h3>
                    <button style={{backgroundColor:"  #ff1a1a",padding:"5px 20px",borderRadius:"6px",color:"white"}}>Edit</button>
                    <button style={{backgroundColor:"#ffff4d",padding:"5px 20px",borderRadius:"6px",color:"red  "}}>Delete</button>
                </div>
            })
        }
    </div>
  )
}
