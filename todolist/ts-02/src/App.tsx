import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

//CRUD (сокр. от англ. create, read, update, delete — «создать, прочесть, обновить, удалить»)
function App() {
    //BLL :
    const todoListTitle: string = "What to learn"
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "Redux", isDone: true},
        {id: 5, title: "Angular", isDone: true},
    ]
    //UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasks}
            />
        </div>
    );
}

export default App;
