import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItem1 from "./components/TodoItem1";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container text-start">
        <AddToDo />
        <TodoItem1 />
      </div>
    </center>
  );
}

export default App;
