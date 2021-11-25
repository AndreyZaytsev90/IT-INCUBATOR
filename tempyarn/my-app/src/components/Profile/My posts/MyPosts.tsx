import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = () => {
    return <div>My posts
        <div>
            <div><textarea>Your text...</textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    </div>
}

export default MyPosts