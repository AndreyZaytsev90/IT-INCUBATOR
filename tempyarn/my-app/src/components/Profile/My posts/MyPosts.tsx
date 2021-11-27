import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props: any) => {
    return <div>My posts
        <div>
            <div><textarea>Your text...</textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message = "Hi, how are you?" likesCount = "20"/>
                <Post message = "It's my first post" likesCount = "25"/>

            </div>
        </div>
    </div>
}

export default MyPosts