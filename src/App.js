import {useState} from "react";
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {


    const [trigger, setTrigger] = useState(null);

    const [carForUpdate, setCarForUpdate] = useState({});


    return (
        <div>
            <Form update={setTrigger} carForUpdate={carForUpdate}/>
            <Cars trigger={trigger} update={setTrigger} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
}

export default App;
