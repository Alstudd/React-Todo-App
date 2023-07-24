import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
    const [items, setItems] = useState([]); 

    function addItem(input) {
        setItems(prevItems => {
            return [...prevItems, input];
        });
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter(
                (item, index) => {
                    return index !== id
                }
            )
        })
    }

    return (
        <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addItem} />
        <div>
            <ul>
                {items.map((todoItem, index) => <TodoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />)}
            </ul>
        </div>
        </div>
    );
}

export default App;
