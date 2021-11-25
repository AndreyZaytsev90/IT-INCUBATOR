import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img alt="night"
                     src="https://i.pinimg.com/originals/8e/61/ff/8e61ff28302b6fef1057d1b5afb52d3f.png"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile