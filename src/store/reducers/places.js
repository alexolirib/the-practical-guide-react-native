import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE, HANDLE_NAME_VALUE, REMOVE_ALL_LIST } from '../actions/actionTypes'


const initialState = {
    placeName: '',
    place: [],
    itemSelected: null
}
//redux sempre retornamos novo estado nunca manupulamos o antigo 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                //spread operator
                ...state,//estado antigo copiado
                place: state.place.concat({
                    key: Math.random().toString(),
                    value: state.placeName,
                    image: {
                        uri: 'https://blogs.universal.org/bispomacedo/wp-content/uploads/2016/07/dest_bm0207-706x432.jpg'
                    }
                }),
                placeName: ''
            };
        case REMOVE_ALL_LIST:
            return{
                ...state,
                place: []
            }
        case DELETE_PLACE:
            return {
                ...state,
                place: state.place.filter(p => {
                    return state.itemSelected.key !== p.key
                }),
                itemSelected: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                itemSelected: state.place.find(p => {
                    return p.key === action.placeKey;
                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                itemSelected: null
            };
        case HANDLE_NAME_VALUE:
            return{
                ...state,
                placeName: action.text
            }
        default:
            return state;
    }
}

export default reducer