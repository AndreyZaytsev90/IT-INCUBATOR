import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id

    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Olga"},
        {id: 3, name: "Petr"},
        {id: 4, name: "Sergey"},]

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>


            </div>
            <div className={s.messages}>
                <div>
                    <Message message={messagesData[0].message} id={messagesData[0].id}/>
                    <Message message={messagesData[1].message} id={messagesData[1].id}/>
                    <Message message={messagesData[2].message} id={messagesData[2].id}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs