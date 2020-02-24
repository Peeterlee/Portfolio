import {createStore} from 'redux';

const initialState = {
    display:'about'
}

export default createStore(function(state, action){
    if(action.type === 'display'){
        return {...state, display:state.workname}
    }

},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())