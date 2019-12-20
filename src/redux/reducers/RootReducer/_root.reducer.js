import { combineReducers } from 'redux';
import plantListReducer from './plantList.reducer';


const rootReducer = combineReducers({
    plantListReducer,
})


export default rootReducer;