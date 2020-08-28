import { CHANGE_CITY_INPUT, CLEAR_CITY_INPUT } from 'actions/CityinputActions'

const initialState = {
    inputValue: ''
}
export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY_INPUT: {
            return {
                ...state,
                inputValue: action.payload
            }
        }
        case CLEAR_CITY_INPUT: {
            return {
                ...state,
                inputValue: ''
            }
        }
        default: return state
    }
}