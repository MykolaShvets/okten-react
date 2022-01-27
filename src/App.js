import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";
import SingleEpisodePage from "./pages/SingleEpisodePage/SingleEpisodePage";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<EpisodesPage/>}/>
                <Route path={':id'} element={<SingleEpisodePage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
