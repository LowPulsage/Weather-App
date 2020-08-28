import {
    TOOGLE_IS_LOADING,
    SET_TODAY_DATA,
    APPEND_NEW_REQUEST_DATA,
    SET_ERROR_MESSAGE,
    CLEAR_ERROR_MESSAGE,
    SET_LAST_SEARCHED_CITIES
} from 'actions/WeatherDataActions'

import {
    CLEAR_CITY_INPUT
} from 'actions/CityinputActions'

const initialState = {
    isLoading: false,
    todayData: {},
    allRequestsData: {},
    errorMessage: '',
    lastSearchedCities: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case SET_TODAY_DATA: {
            return {
                ...state,
                todayData: action.payload
            }
        }
        case APPEND_NEW_REQUEST_DATA: {
            const data = { ...state.allRequestsData }
            data[action.payload.name.toLowerCase()] = action.payload

            return {
                ...state,
                allRequestsData: data
            }
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.payload
            }
        }
        case CLEAR_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: ''
            }
        }
        case CLEAR_CITY_INPUT: {
            return {
                ...state,
                todayData: {}
            }
        }
        case SET_LAST_SEARCHED_CITIES: {
            const copyLastSC = [...state.lastSearchedCities]
            if (!copyLastSC.includes(action.payload)) {
                copyLastSC.unshift(action.payload)
                if (copyLastSC.length > 5) copyLastSC.pop()
            }

            // якщо таке місто вже було серед останніх п'яти, то повернути без змін, 
            // якщо не було знайдено, то записати спереді, та видалити осатнній якщо більше 5 елементів
            return {
                ...state,
                lastSearchedCities: copyLastSC
            }
        }
        default: return state
    }
}