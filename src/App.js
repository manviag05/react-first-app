import logo from './logo.svg';
import './App.css';
import Header from './Mycomponenets/Header';
import Todos from './Mycomponenets/Todos';
import Footer from './Mycomponenets/Footer';
import { useEffect, useState } from 'react';
import Addtodo from './Mycomponenets/Addtodo';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }




const onDelete=(todo)=>{
  console.log("i am delete of todo",todo);

  setTodos(todos.filter((e)=>{
return e!==todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
}


const addTodo=(title,desc)=>{
  console.log("i am adding this todo",title,desc)
  let sno;
  if(todos.length==0){
    sno=0;
  }
  else{
    sno=todos[todos.length-1].sno+1;
  }
  const mytodos={   //defining additional todo
    sno:sno,
    title:title,
    desc:desc
  }
  setTodos([...todos, mytodos]);   //adding new todo to todos list.
  console.log(mytodos);
   //saving todos by converting todo object to string using json.stringy
}

const[todos , setTodos]=useState(initTodo);
useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos)); 
}, [todos])
  

  return (
    <>
    <Header title="my todo list" searchBar={false} />
    <Addtodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer />
    </>
  );
}

export default App;
