import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "4-10-2026",
    },
    {
      name: "Go To College",
      date: "6-10-2026",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container text-start">
        <AddToDo />
        <TodoItem todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
