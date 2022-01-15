import React, {useState} from 'react';

const FindForm = ({find}) => {

    const [form, setForm] = useState({"name": '', "username": '', "email": ''});

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventData})
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label> Name: <input type="text" name={'name'} onChange={formHandler}/></label>
                <label> Username: <input type="text" name={'username'} onChange={formHandler}/></label>
                <label> Email: <input type="text" name={'email'} onChange={formHandler}/></label>
                <button onClick={() => find(form)}>Find</button>
            </form>
        </div>);
};

export default FindForm;
