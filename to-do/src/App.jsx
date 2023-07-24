
import Header from "./Components/Header";
import ToDoItems from "./Components/TodoItems";
import Button from "./Components/Button";


import "./Style.css"


function App() {
  return (
   <div className="todo-container">
    <Header/>
    <ToDoItems/>
    <ToDoItems/>
    <ToDoItems/>
    <ToDoItems/>
    <ToDoItems/>
    <Button/>
   </div>
  )
}



export default App;
