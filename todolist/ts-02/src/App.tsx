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

    const [tasks, setTasks] = useState<Array<TaskType>>([                 // в консоли будет 0 (изначальные данные) и 1 - функция
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "Redux", isDone: false},
        {id: 5, title: "Angular/Vue", isDone: false},
    ])
  //  console.log(result)
   /* const tasks = result[0] // изначальные данные (все что угодно)
    const setTasks = result[1] */// функция

    const todoListTitle: string = "What to learn"

    /*let tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "Redux", isDone: false},
        {id: 5, title: "Angular/Vue", isDone: false},
    ]*/
    const removeTask = (id: number) => { //2
       // const filteredTasks: Array<TaskType> = tasks.filter(task => task.id !== id)  // можно через .forEach. Можно удалить переменную filteredTasks и tasks.filter(task => task.id !== id) сразу в setTasks
        // return undefined - по умолчанию
        setTasks(tasks.filter(task => task.id !== id))
       // console.log(tasks)
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
