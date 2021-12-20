import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
//CRUD (сокр. от англ. create, read, update, delete — «создать, прочесть, обновить, удалить»)
export type FilterValuesType = "all" | "active" | "completed"

function App() {
    console.log(v1())
    //BLL :
    const todoListTitle: string = "What to learn"

    const [filter, setFilter] = useState<FilterValuesType>("all")


    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: true},
        {id: v1(), title: "Redux", isDone: true},
        {id: v1(), title: "Angular/Vue", isDone: false},
    ])

    const changeFilter = (filter: FilterValuesType) => setFilter(filter)

    const removeTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const getTasksForRender = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(task => task.isDone)
            case "active":
                return tasks.filter(task => !task.isDone)
            default:
                return tasks
        }
    }
    //UI:
    return (
        <div className="App">
            <TodoList
                filter={filter}
                title={todoListTitle}
                tasks={getTasksForRender()}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
