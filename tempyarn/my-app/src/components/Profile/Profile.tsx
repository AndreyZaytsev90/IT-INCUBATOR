import React from 'react';
import MyPosts from './My posts/Post/MyPosts';
import s from './Profile.module.css'


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img alt="night"
                 src="https://i.pinimg.com/originals/8e/61/ff/8e61ff28302b6fef1057d1b5afb52d3f.png"/>
        </div>
        <div>
            ava + description
        </div>
      <MyPosts />
    </div>
}

export default Profile