import React from 'react';
import s from './Post.module.css'


const Post = () => {
    return <div>My posts
        <div className={s.posts}>
            <div className={s.item}><img alt=""
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBX73_sltwESW05Q06z-3n--ppAVp3AO8Y8g&usqp=CAU"/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>

        </div>
    </div>
}

export default Post