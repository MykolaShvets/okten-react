import {useEffect, useState} from "react";

import {usersServices} from "./services/users.services";
import Users from "./components/Users/Users";
import FindForm from "./components/FindForm/FindForm";

function App() {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setfilteredUsers] = useState([]);


    useEffect(() => {
        usersServices.getAll()
            .then(value => {
                setUsers([...value])
                setfilteredUsers([...value])
            })

    }, []);


    const find = (form) => {

        console.log(form)
        let filterArr = [...users]
        if (form.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(form.name.toLowerCase()))
        }
        if (form.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(form.username.toLowerCase()))
        }
        if (form.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(form.email.toLowerCase()))
        }

        setfilteredUsers(filterArr)
    };


    return (
        <div>

            <FindForm find={find}/>
            <Users users={filteredUsers}/>
        </div>
    );
}

export default App;
