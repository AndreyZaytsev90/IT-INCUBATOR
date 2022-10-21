import axios from "axios";
import React, {useState} from 'react';
import {findAllByDisplayValue} from "@testing-library/react";

const api = {
    getTodos() {
        return axios
            .get('https://jsonplaceholder.typicode.com/todo/1 ')
            .then((res) => res.data)
    }
}

const Test = () => {

    const [todos, setTodos] = useState([])

    const onClickHandler = () => {
        return api
            .getTodos()
            .then((todolist) => {
                setTodos([...todos, todolist])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <button onClick={onClickHandler}>Load Todos</button>
            {
                todos.map(t => {
                    return (
                        <h1>{t.title}</h1>
                    )
                })
            }
        </div>
    );
};

export default Test;
