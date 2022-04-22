import React, { useState } from 'react'
// import { TodoList } from './TodoList'

export const Todoinput = ({handleAdd}) => {
    const [todolist,setTodolist] = useState('')
  return (
    <div>
       
            <input 
            style={{width: "250px", background :"rgb(214, 209, 207)", borderColor:"rgb( 9, 209, 100)", borderRadius:"5px", padding:"1%"}}
            // type="text"
            placeholder='Write Something'
            name='todolist'
            value = {todolist}
            onChange = {(e) => setTodolist(e.target.value)}
             />
             <button style={{padding:"0.9%", marginLeft:'10px', borderRadius:"5px"}} onClick={() => handleAdd(todolist)}> Add </button>
  
    </div>
  )
}
