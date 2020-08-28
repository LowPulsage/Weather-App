import { requestWeatherForWeek } from '../API/index'

export const TOOGLE_IS_LOADING = 'weather_for_week/TOOGLE_IS_LOADING'
export const SET_SELECTED_CITY_DATA = 'weather_for_week/SET_SELECTED_CITY_DATA'
export const SET_ALL_WEATHER_FOR_WEEK = 'weather_for_week/SET_ALL_WEATHER_FOR_WEEK'

export const toogleIsLoading = payload => ({ type: TOOGLE_IS_LOADING, payload })
export const setSelectedCityData = payload => ({ type: SET_SELECTED_CITY_DATA, payload })
export const setAllWeatherForWeek = payload => ({ type: SET_ALL_WEATHER_FOR_WEEK, payload })


export const getWeatherForWeek = todayData => async dispatch => {
    dispatch(toogleIsLoading(true))
    try {
        const response = await requestWeatherForWeek({ ...todayData.coord })
        dispatch(setSelectedCityData(response.data))
        dispatch(setAllWeatherForWeek({ name: todayData.name, data: response.data }))
    } catch (e) {
        console.error(e)
    } finally {
        dispatch(toogleIsLoading(false))
    }
}

