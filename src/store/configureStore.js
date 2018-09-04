import { createStore, combineReducers } from 'redux'
import placeReducer from './reducers/places';

const rootReducer = combineReducers({
    place: placeReducer
})

const configureStore = () =>{
    return createStore(rootReducer)
}

export default configureStore;