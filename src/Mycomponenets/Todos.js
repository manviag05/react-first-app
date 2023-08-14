import React from 'react'
import Todoitem from './Todoitem';
const Todos = (props) => {

  let mystyle={
    minheight: "70vh",
    margin:"40px auto"
  }


  return (
    <div className="container my-3" style={mystyle}>
        <h3 className=" my-3">Todo list</h3>
      {props.todos.length===0?" No todos to diaplay":props.todos.map((todo)=>{
        return(
          
     <>
      <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
     </> 
     )})
    }
    </div>
  )
}

export default Todos
