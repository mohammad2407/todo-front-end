import React from 'react'

export const TodoItem = ({handleToggle,id,todolist,status}) => {
    // console.log(singleTodo)
  return (
    <div>
        
        <div
            style={{width: "250px", margin:"auto", marginTop:"20px", background :"rgb(214, 209, 207)", borderColor:"rgb( 9, 209, 100)", borderRadius:"5px", padding:"1%"}}
        > <h4>{todolist}</h4> 
        </div>
        <div
            style={{width: "250px", margin:"auto", marginTop:"20px", background :"rgb(214, 209, 207)", borderColor:"rgb( 9, 209, 100)", borderRadius:"5px", padding:"1%"}}
        
        > 
            <h4>status : {status ? "completed" : 'No Completed'}</h4>
        </div>
            <button onClick={() =>handleToggle(id)}>toggle</button>
            
    </div>
  )
}
