import React, { useState } from 'react'
import { Todoinput } from './Todoinput'
import { v4 as uuid } from 'uuid';
import { TodoItem } from './TodoItem';
export const TodoList = () => {
    const [data, setData] = useState([])
    const Addtodo =(todolist) =>{
        const payload = {
            todolist,
            status:false,
            id: uuid()
        }
        setData([...data, payload])
    }

    const handleToggle = (id) =>{
        const updatedData = data.map((item) =>
        (item.id === id ? {...item, status:!item.status}: item))
        setData(updatedData)
       }

  return (
    <div>
        <Todoinput handleAdd = {Addtodo}/>
        {
            data.map((singleTodo) => {
                return <TodoItem {...singleTodo} key = {uuid()} handleToggle = {handleToggle}/>
            })
        }
    </div>
  )
}
