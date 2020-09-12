import React from "react";
import TodoItem from "./components/TodoItems";

function App(){
  return (
    <div>
      <h1>My todo list</h1>
      <TodoItem todo = "Finish plus Project" />
      <TodoItem todo = "Baby Swimming lesson" />
      <TodoItem todo = "Sleep" />
    </div>
  );
}

export default App;
