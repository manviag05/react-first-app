import logo from './logo.svg';
import './App.css';
import Header from './Mycomponenets/Header';
import Todos from './Mycomponenets/Todos';
import Footer from './Mycomponenets/Footer';
import { useState } from 'react';
import Addtodo from './Mycomponenets/Addtodo';

function App() {
const onDelete=(todo)=>{
  console.log("i am delete of todo",todo);

  setTodos(todos.filter((e)=>{
return e!==todo;
    }))
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
  setTodos([...todos, mytodos]);   //adding todo to todos list.
  console.log(mytodos);
}

const[todos , setTodos]=useState([
  {
    sno:1,
    title:"go to market",
    desc:"you have to go market"
  },
  {
    sno:2,
    title:"go to store",
    desc:"you have to go store"
  },
  {
    sno:3,
    title:"go to shop",
    desc:"you have to go store"
  }
])
  

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
