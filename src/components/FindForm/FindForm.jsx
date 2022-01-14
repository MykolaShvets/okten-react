import React from 'react';

const FindForm = ({find, formHandler}) => {

    return (
        <div>
            <form onSubmit={find}>
                <label> Name: <input type="text" name={'name'} onChange={formHandler}/></label>
                <label> Username: <input type="text" name={'username'} onChange={formHandler}/></label>
                <label> Email: <input type="text" name={'email'} onChange={formHandler}/></label>
                <button>Find</button>
            </form>
        </div>);
};

export default FindForm;
