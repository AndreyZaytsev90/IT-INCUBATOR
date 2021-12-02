import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props: any) => {
    return <div className={s.postsBlock}>
        <h3>My posts </h3>
        <div>
            <div>
                <div><textarea>Your text...</textarea></div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount=" 20"/>
                <Post message="It's my first post" likesCount=" 25"/>

            </div>
        </div>
    </div>
}

export default MyPosts