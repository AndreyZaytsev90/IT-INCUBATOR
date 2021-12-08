import React from 'react'
import s from "./Message.module.css"

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.messageItem}>
            <div className={s.avatar}><img src={props.avatar} alt="avatar"/></div>
            <div className={s.message}>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
