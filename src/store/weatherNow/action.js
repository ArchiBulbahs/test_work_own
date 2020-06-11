export const CHANGE_LOADING_WEATHER_NOW = 'CHANGE_LOADING_WEATHER_NOW';
export const SAVE_INFO_WEATHER_NOW = 'SAVE_INFO_WEATHER_NOW';
export const CHANGE_LOAD_WEATHER_NOW = 'CHANGE_LOAD_WEATHER_NOW';

export const changeLoadingWeatherNow = (loader) => {
    return {
        type: CHANGE_LOADING_WEATHER_NOW,
        payload: loader
    }
};
export const changeLoadWeatherNow = (load) => {
    return {
        type: CHANGE_LOAD_WEATHER_NOW,
        payload: load
    }
};
export const saveInfoWeatherNow = (weatherNow) => {
    return {
        type: SAVE_INFO_WEATHER_NOW,
        payload: weatherNow
    }
};