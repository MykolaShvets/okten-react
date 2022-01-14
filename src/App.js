import {useEffect, useState} from "react";

import {usersServices} from "./services/users.services";
import Users from "./components/Users/Users";
import FindForm from "./components/FindForm/FindForm";

function App() {

    const [users, setUsers] = useState([]);

    const [form, setForm] = useState({"name": '', "username": '', "email": ''});

    useEffect(() => {
        usersServices.getAll()
            .then(value => setUsers(value))

    }, []);


    const find = (e) => {
        e.preventDefault()
        console.log(form);
        if (form.name !== '' || form.username !== '' || form.email !== '') {
            setUsers(users.filter(user => user.name.includes(form.name) && user.username.includes(form.username) && user.email.includes(form.email)))
        } else {
            setUsers(users)
        }

    };


    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


    return (
        <div>

            <FindForm find={find} formHandler={formHandler}/>
            <Users users={users}/>
        </div>
    );
}

export default App;
