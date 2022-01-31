import {Routes, Route} from "react-router-dom";

import './App.css'
import {Layout} from "./components";
import {CarsPage} from "./pages";
import {UsersPage} from "./pages/UsersPage/UsersPage";
import {PostsPage} from "./pages/PostsPage/PostsPage";
import {CommentPage} from "./pages/CommentPage/CommentPage";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<CarsPage/>}/>
        <Route path={'/users'} element={<UsersPage/>}/>
        <Route path={'/posts'} element={<PostsPage/>}/>
        <Route path={'/comments'} element={<CommentPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
