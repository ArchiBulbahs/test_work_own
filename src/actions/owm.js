import axios from 'axios'

export const getWeatherNow = (city, language = 'ru', units = 'metric') => {
    return axios.get(`weather?q=${city}&units=${units}&lang=${language}&appid=f7c429c31dbb8e9e8fac1cd7dcdf3af9`);
};
export const getOneCall = (lat, lon, language = 'ru', units = 'metric') => {
    return axios.get(`onecall?lat=${lat}&lon=${lon}&units=${units}&lang=${language}&appid=f7c429c31dbb8e9e8fac1cd7dcdf3af9`);
};