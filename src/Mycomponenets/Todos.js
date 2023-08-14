import React from 'react'
import Todoitem from './Todoitem';
const Todos = (props) => {
  return (
    <div className="container">
        <h3 className=" my-3">Todo list</h3>
      {props.todos.length===0?" No todos to diaplay":props.todos.map((todo)=>{
        return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
    </div>
  )
}

export default Todos
