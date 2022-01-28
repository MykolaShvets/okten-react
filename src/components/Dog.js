import React from 'react';

const Dog = ({dog,  deleteDog}) => {
    return (
        <div className={'dogs'}>
            <h3>{dog}</h3>
            <button onClick={() =>  deleteDog(dog)} >Delete</button>
        </div>
    );
};

export default Dog;

