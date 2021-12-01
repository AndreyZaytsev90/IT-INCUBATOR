import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    message: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Andrew" id="1"/>
                <DialogItem name="Olga" id="2"/>
                <DialogItem name="Petr" id="3"/>
                <DialogItem name="Sergey" id="4"/>

            </div>
            <div className={s.messages}>
                <div>
                    <Message message = "Hi"/>
                    <Message message = "How is your it-kamasutra"/>
                    <Message message = "Yo"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs