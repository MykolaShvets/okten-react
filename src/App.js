import {Counters, Form, ToDoItems} from "./components";
import './App.css'

function App() {
    return (
        <div className={'wrapp'}>
            <Counters/>
            <Form/>
            <ToDoItems/>
        </div>
    );
}

export default App;
