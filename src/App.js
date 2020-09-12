import React, { useState} from "react";
import TodoItem from "./components/TodoItems";

function App(){
  // variables
  const [todos, setTodos] = useState([
    "Finish plus Project",
    "Baby Swimming lesson",
    "Sleep",
  ]);


  // template
  return (
    <div>
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </div>
  );
}

export default App;
