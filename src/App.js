import {Route, Routes} from "react-router-dom";

import './App.css'
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UserDetails from "./components/UserDetails/UserDetails";
import UserPosts from "./components/UserPosts/UserPosts";
import PostDetails from "./components/PostDetails/PostDetails";
import PostComments from "./components/PostComments/PostComments";
import UserAlbums from "./components/UserAlbums/UserAlbums";
import Photos from "./components/Photos/Photos";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<UserAlbums/>}>
                            <Route path={':albumId'} element={<Photos/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<PostComments/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
