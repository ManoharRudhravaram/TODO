import React from 'react'

export default function TodoList({list}) {
  return (
    <div className='container'>
      <div className="row">

        {
          list.length==0 ? <h4>Add Tasks</h4> : list.map((todo)=>{
                return <div className='col-md-3' key={todo.id} style={{border:"1px solid",width:"300px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",margin:"5px",padding:"20px",position:"relative",backgroundColor:"#99ffff"}}>
                  <input type="checkbox" style={{position:"absolute",top:"10px",right:"10px"}}/>
                    <h3>{todo.text}</h3>
                    <div className=' gap-2 d-flex'>
                    <button style={{backgroundColor:"  #ff1a1a",padding:"5px 20px",borderRadius:"6px",color:"white"}}>Edit</button>
                    <button style={{backgroundColor:"#ffff4d",padding:"5px 20px",borderRadius:"6px",color:"red  "}}>Delete</button>
                    </div>
                </div>
            })
        }
    </div>
</div>
  )
}
