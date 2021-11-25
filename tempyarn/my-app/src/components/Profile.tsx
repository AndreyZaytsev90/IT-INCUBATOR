import React from 'react';
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
        <div>My posts
            <div>
                <div>New post</div>
                <div className={s.posts}>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                </div>
            </div>
        </div>
    </div>
}

export default Profile