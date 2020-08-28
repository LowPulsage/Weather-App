import { combineReducers } from 'redux'
import cityInput from './InputCityReducer'
import weatherData from './weatherDataReducer'
import weatherForWeek from './weatherForWeekReducer'

export default combineReducers({
    cityInput,
    weatherData,
    weatherForWeek
})  
