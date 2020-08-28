import { requestWeather } from '../API/index'
import { onChangeInput } from 'actions/CityinputActions'

export const TOOGLE_IS_LOADING = 'weather_data/TOOGLE_IS_LOADING'
export const SET_TODAY_DATA = 'weather_data/SET_TODAY_DATA'
export const APPEND_NEW_REQUEST_DATA = 'weather_data/APPEND_NEW_REQUEST_DATA'
export const SET_ERROR_MESSAGE = 'weather_data/SET_ERROR_MESSAGE'
export const CLEAR_ERROR_MESSAGE = 'weather_data/CLEAR_ERROR_MESSAGE'
export const SET_LAST_SEARCHED_CITIES = 'weather_data/SET_LAST_SEARCHED_CITIES'

export const toogleIsLoading = payload => ({ type: TOOGLE_IS_LOADING, payload })
export const setTodayData = payload => ({ type: SET_TODAY_DATA, payload })
export const appendNewRequestData = payload => ({ type: APPEND_NEW_REQUEST_DATA, payload })
export const setErrorMessage = payload => ({ type: SET_ERROR_MESSAGE, payload })
export const clearErrorMessage = payload => ({ type: CLEAR_ERROR_MESSAGE, payload })
export const setLastSearchedCities = payload => ({ type: SET_LAST_SEARCHED_CITIES, payload })


export const getTodayData = cityName => async dispatch => {
    dispatch(clearErrorMessage())
    dispatch(toogleIsLoading(true))
    try {
        const response = await requestWeather(cityName);
        dispatch(setTodayData(response.data))
        dispatch(appendNewRequestData(response.data))
        dispatch(setLastSearchedCities(response.data.name))
        dispatch(onChangeInput(''))
    }
    catch (e) {
        dispatch(setErrorMessage(e.response.data.message))
    } finally {
        dispatch(toogleIsLoading(false))
    }
}

