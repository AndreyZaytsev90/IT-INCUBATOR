import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed"

//CRUD (сокр. от англ. create, read, update, delete — «создать, прочесть, обновить, удалить»)
function App() {
    //BLL :
    const todoListTitle: string = "What to learn"

    const [filter, setFilter] = useState<FilterValuesType>("all")


    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "Redux", isDone: true},
        {id: 5, title: "Angular/Vue", isDone: false},
    ])

    const changeFilter = (filter: FilterValuesType) => setFilter(filter)

    const removeTask = (id: number) => {
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
