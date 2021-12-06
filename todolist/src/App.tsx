import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    //BLL :
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"
    //UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle_1}/>
            <TodoList title={todoListTitle_2}/>
        </div>
    );
}

export default App;
