import React from 'react';
import s from './MyPosts.module.css'


const MyPosts = () => {
    return <div>My posts
        <div>
            <div><textarea>Your text...</textarea>
                <buttom>Add post</buttom>
                <buttom>Remove</buttom>
            </div>
            <div className={s.posts}>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
                <div className={s.item}>post 3</div>
                <div className={s.item}>post 4</div>
                <div className={s.item}>post 5</div>
            </div>
        </div>
    </div>
}

export default MyPosts