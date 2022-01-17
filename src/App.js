import {useState} from "react";

import {carService} from "./services/cars.service";
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {


    const [trigger, setTrigger] = useState(null);

    const update = (data) => {
        setTrigger(data)
    };

    const deleteCar = (id) => {
        carService.deleteById(id).then(value => update(value))
    }



  return (
    <div>
        <Form update={update}/>
        <Cars trigger={trigger} deleteCar={deleteCar} update={update}/>
    </div>
  );
}

export default App;
