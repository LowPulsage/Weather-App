import axios from 'axios';
const TOKEN = '3497b460fb9b7efc3e6686d6481a478e'

const baseUrl = 'https://api.openweathermap.org/data/2.5'
// const secondBaseUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=current,minutely,hourly&appid=bf71a3ad72599d835997ac65a98460aa'
const Instance = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
});

export const requestWeather = (cityName) => {
    return Instance(`weather?q=${cityName}&appid=${TOKEN}`)
}

export const requestWeatherForWeek = ({lat, lon}) => {
    return Instance(`onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${TOKEN}`)
}