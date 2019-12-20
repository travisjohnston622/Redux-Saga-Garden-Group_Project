import { combineReducers } from 'redux';
import plantListReducer from '../PlantListReducer/plantList.reducer';


const rootReducer = combineReducers({
    plantListReducer,
    
})

export default rootReducer;