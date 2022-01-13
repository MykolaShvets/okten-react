
import './App.css'
import Users from "./components/Users/Users";
import {userServices} from "./services/user.services";
import {postServices} from "./services/post.services";
import React, {useState} from "react";
import UserDetails from "./components/UserDetails/UserDetails";
import Post from "./components/Post/Post";



function App() {

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUserId = (id) => {
        userServices.getById(id)
            .then(value => setUser(value))
    };

    const getUserPosts = (id) => {
        postServices.getPostsByUserId(id)
            .then(value => setPosts(value))
    };

    return (
        <div className={'wrapp'}>
            <div className={'top'}>
                <div className={'users'}>
                    <Users getUserId={getUserId} getUserPost={getUserPosts}/>
                </div>
                <div className={'details'}>
                    {user && <UserDetails key={user.id} user={user} getUserPosts={getUserPosts}/>}
                </div>
            </div>
            <div className={'posts'}>
                {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            </div>


        </div>
    );
}

export default App;
