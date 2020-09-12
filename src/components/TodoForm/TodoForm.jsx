import React, { useState } from "react";
import "./TodoForm.css";


function TodoForm(props){
// variables
    const { addTodo } = props;
    const [value, setValue] = useState("");

// methods
    const handleSubmit = (event) =>{
        event.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    };    

// template
    return(
        <div className="todo">
            <form onSubmit={handleSubmit}>
                <input
                    value={value}
                    type="text"
                    placeholder="Add Todo..."
                    onChange={(event) => setValue(event.target.value)}
            />
            </form>
        </div>
    );
}

export default TodoForm;