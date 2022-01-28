import {useReducer} from "react";
import Cat from "./components/Cat";
import Dog from "./components/Dog";


const reducer = (state, action) => {
    switch (action.type) {
        case 'cat':
            return {...state, [action.field]: state.cats.push(action.payload)}
        case 'dog':
            return {...state, [action.field]: state.dogs.push(action.payload)}
    }


};


function App() {

    const [state, dispatch] = useReducer(reducer,{cats: [], dogs: []});


    console.log(state);
    const catFormHandler = (e) => {
        return dispatch({
            type: 'cat',
            field: e.target.name,
            payload: e.target.cats.value
        })
    }

    const dogFormHandler = (e) => {
        return dispatch({
            type: 'dog',
            field: e.target.name,
            payload: e.target[0].value
        })
    }

    return (
        <div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    catFormHandler(e)

                }}>
                    <label>Add cat: <input type="text" name={'cats'}/></label>
                    <button>Add</button>
                </form>
                <div>
                    {state.cats && state.cats.map(cat => <Cat key={cat} cat={cat}/>)}
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
                <div>
                    {state.dogs.map(dog => <Dog key={dog} dog={dog}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;

