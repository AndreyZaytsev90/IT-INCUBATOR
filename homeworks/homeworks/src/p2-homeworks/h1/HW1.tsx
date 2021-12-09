import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Andrey Zaytsev',
    message: 'Игнат! Я сделал это!',
    time: '00:05 10.12.2021',
}

const HW1 = () => {
    return (
        <div>
            <hr/>
            <h2>homeworks 1</h2>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
