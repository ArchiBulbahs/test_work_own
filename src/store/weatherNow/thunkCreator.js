import {getWeatherNow} from '../../actions/owm';
import {changeLoadingWeatherNow, saveInfoWeatherNow, changeLoadWeatherNow} from './action';
import {type_notification, addNotification} from '../../app/Pages/System/InfoMessage/action'

import {getOneCallCreatorThunk} from '../oneCall/thunkCreator'
import {changeLoadingOneCall} from "../oneCall/action";
import {setSettingsLastSearch, setSettingsSearch} from '../settings/action'

export const getWeatherNowCreatorThunk = (city, language, units) => (dispatch) => {
    city = city[0].toUpperCase() + city.substr(1);
    
    dispatch(changeLoadingWeatherNow(true));
    dispatch(changeLoadingOneCall(true));
    getWeatherNow(city, language, units).then(res => {
        dispatch(saveInfoWeatherNow({...res.data, city}));
        dispatch(setSettingsLastSearch(city));
        dispatch(setSettingsSearch(city));
        dispatch(changeLoadingWeatherNow(false));
        dispatch(changeLoadWeatherNow(true));
        dispatch(getOneCallCreatorThunk(res.data.coord.lat, res.data.coord.lon, language, units))
    }).catch(err => {
        if (err.response) {
            addNotification('', 'Город не найден', type_notification.danger);
        }
        dispatch(changeLoadingWeatherNow(false));
    })
};