import React, {useState} from 'react';
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

    const result = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "Redux", isDone: false},
        {id: 5, title: "Angular/Vue", isDone: false},
    ])
    console.log(result)
    const tasks = result[0]
    const setTasks = result[1]

    const todoListTitle: string = "What to learn"

    /*let tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "Redux", isDone: false},
        {id: 5, title: "Angular/Vue", isDone: false},
    ]*/
    const removeTask = (id: number) => { //2
        const filteredTasks: Array<TaskType> = tasks.filter(task => task.id !== id)
       // return undefined - по умолчанию
        setTasks(filteredTasks)
        console.log(tasks)
    }
    //UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
