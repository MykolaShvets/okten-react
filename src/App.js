import {useReducer} from "react";

import './App.css'
import Cat from "./components/Cat";
import Dog from "./components/Dog";


const reducer = (state, action) => {
    switch (action.type) {
        case 'cat':
            return {...state, cats: [...state.cats, action.payload]}
        case 'dog':
            return {...state, dogs: [...state.dogs, action.payload]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter(item => item !== action.payload)}
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(item => item !== action.payload)}
        default:
            throw new Error('error')
    }


};


function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});


    const catFormHandler = (e) => {
        return dispatch({
            type: 'cat',
            payload: e.target[0].value
        })
    }

    const dogFormHandler = (e) => {
        return dispatch({
            type: 'dog',
            payload: e.target[0].value
        })
    }

    const deleteCat = (cat) => {
        dispatch({
            type: 'deleteCat',
            payload: cat
        })
    }
    const deleteDog = (dog) => {
        dispatch({
            type: 'deleteDog',
            payload: dog
        })
    }

    return (
        <div className={'wrapp'}>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    catFormHandler(e)

                }}>
                    <label>Add cat: <input type="text" name={'cats'}/></label>
                    <button>Add</button>
                </form>
                <div className={'cats__block'}>
                    <h2>Cats:</h2>
                    {state.cats && state.cats.map(cat =><Cat key={cat} cat={cat} deleteCat={deleteCat}/>)}
                </div>
            </div>

            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    dogFormHandler(e)
                }}>
                    <label>Add dog: <input type="text" name={'dogs'}/></label>
                    <button>Add</button>
                </form>
                <div className={'dogs__block'}>
                    <h2>Dogs:</h2>
                    {state.dogs.map(dog => <Dog key={dog} dog={dog} deleteDog={deleteDog}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;

