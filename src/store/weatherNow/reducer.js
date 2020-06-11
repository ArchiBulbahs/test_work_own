import {CHANGE_LOADING_WEATHER_NOW, SAVE_INFO_WEATHER_NOW, CHANGE_LOAD_WEATHER_NOW} from './action';

const defaultStore = {
    load: false, // данные загружены
    loading: false, // данные отсутствуют
    city: '', // название города
    coord: { // координаты
        lon: null,
        lat: null
    },
    sunrise: null, // время восхода
    sunset: null, // время заката
    wind: {
        speed: null, //скорость ветра
        deg: null, // направление ветра градусы метеорологические
    },
    temp: null, // температура
    feels_like: null, // температура по ощущениям
    pressure: null, // давление уровня моря если нет sea_level и grnd_level гПа
    sea_level: null, // давление уровня моря гПа
    grnd_level: null, // давление уровня земли гПа
    humidity: null, // влажность %
    code_weather: null, //код погодных условий
    date: null, // время расчета данных
    timezone: null
};


export const weatherNow = (store = defaultStore, action) => {
    let save = null;
    switch (action.type) {
        case CHANGE_LOADING_WEATHER_NOW:
            save = {
                ...store,
                loading: action.payload
            };
            break;
        case CHANGE_LOAD_WEATHER_NOW:
            save = {
                ...store,
                load: action.payload
            };
            break;
        case SAVE_INFO_WEATHER_NOW:
            if (action.payload) {
                save = {
                    ...store,
                    city: action.payload.city,
                    coord: {
                        lon: action.payload.coord.lon,
                        lat: action.payload.coord.lat,
                    },
                    sunrise: action.payload.sys.sunrise,
                    sunset: action.payload.sys.sunset,
                    wind: {
                        speed: action.payload.wind.speed,
                        deg: action.payload.wind.deg,
                    },
                    temp: action.payload.main.temp,
                    feels_like: action.payload.main.feels_like,
                    pressure: action.payload.main.pressure,
                    sea_level: action.payload.main.sea_level,
                    grnd_level: action.payload.main.grnd_level,
                    humidity: action.payload.main.humidity,
                    code_weather: action.payload.weather[0].id,
                    date: action.payload.dt + action.payload.timezone,
                    timezone: action.payload.timezone
                };
            } else {
                save = store;
            }
            break;
        default:
            save = store;
    }
    // console.log(save)
    return save;
};