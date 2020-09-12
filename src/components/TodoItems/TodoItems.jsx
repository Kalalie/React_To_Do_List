import React from "react";
import "./TodoItems.css";

function TodoItem(props) {
    const { todo, index, completeTodo } = props;
return <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
    {todo.text}
    <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
    </div>
</div>;
}

export default TodoItem;