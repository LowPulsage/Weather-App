import {
    TOOGLE_IS_LOADING,
    SET_SELECTED_CITY_DATA,
    SET_ALL_WEATHER_FOR_WEEK
} from 'actions/weatherForWeekActions'

const initialState = {
    isLoading: false,
    selectedCityData: {},
    allWeatherForWeek: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case SET_SELECTED_CITY_DATA: {
            return {
                ...state,
                selectedCityData: action.payload
            }
        }
        case SET_ALL_WEATHER_FOR_WEEK: {
            const data = { ...state.allWeatherForWeek }
            data[action.payload.name.toLowerCase()] = action.payload.data

            return {
                ...state,
                allWeatherForWeek: data
            }
        }
        default: return state
    }
}