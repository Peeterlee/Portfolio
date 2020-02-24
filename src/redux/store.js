import {createStore} from 'redux';

const initialState = {
    display:'about',
    work_class:'hide_big_work_img',
    name:'default'
}

export default createStore(function(state=initialState, action){
    switch(action.type){
        case 'change_display':{
            return {
                ...state,
                display:action.img_path,
                work_class:action.classN,
                name:action.workname
            }
        }
        default:
            return state;
    }
    
    
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())