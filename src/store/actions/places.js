import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE, HANDLE_NAME_VALUE, REMOVE_ALL_LIST } from './actionTypes'

export const handlePlace = (text) =>{
    return {
        type: HANDLE_NAME_VALUE,
        text
    }
}

export const removeAllList = () =>{
    return {
        type: REMOVE_ALL_LIST
    }
}

export const addPlace = () => {
    return {
        type: ADD_PLACE
    };
}

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    }
}

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        placeKey: key
    }
}

export const deselectPlace = () => {
    return {
        type: DESELECT_PLACE
    }
}