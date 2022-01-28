import React from 'react';

const Cat = ({cat, deleteCat}) => {
    return (
        <div className={'cats'}>
            <h3>{cat}</h3>
            <button onClick={() => deleteCat(cat)}>Delete</button>
        </div>
    );
};

export default Cat;

