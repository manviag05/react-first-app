import logo from './logo.svg';
import './App.css';
import Header from './Mycomponenets/Header';
import 

function App() {
const onDelete=()=>{
  console.log("i am delete of todo","todo");
}

let todos=[
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
    title:"go to store",
    desc:"you have to go store"
  },
]


  return (
    <>
    <Header title="my todo list" searchBar={false} />
    <Footer />
    <Todos todo={todo} onDelete={onDelete}/>
   
    </>
  );
}

export default App;
