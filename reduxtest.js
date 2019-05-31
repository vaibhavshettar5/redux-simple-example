
const {createStore} = require('redux');

const initialState = {
    age: 21
}


const myReducer = (state = initialState, action) => { //creating reducers
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.age += 1;
    }

    if(action.type === 'SUBSTRACT'){
        newState.age -= 1;
    }
    return newState;
}

const store = createStore(myReducer); //creating store

console.log("intial state"+JSON.stringify(store.getState()));
store.dispatch({type: 'ADD'}); //creating action(type is one action we can take val) and dispatch
console.log("changed state"+JSON.stringify(store.getState()));
JSON.stringify
store.dispatch({type: 'SUBSTRACT'});
console.log("changed state"+JSON.stringify(store.getState()));