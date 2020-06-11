import {getOneCall} from '../../actions/owm';
import {changeLoadingOneCall, saveInfoOneCall} from './action';
import {type_notification, addNotification} from '../../app/Pages/System/InfoMessage/action'

export const getOneCallCreatorThunk = (lat, lon, language, units) => (dispatch) => {
    dispatch(changeLoadingOneCall(true));
    getOneCall(lat, lon, language, units).then(res => {
        dispatch(saveInfoOneCall(res.data));
        dispatch(changeLoadingOneCall(false));
    }).catch(err => {
        if (err.response) {
            addNotification('', 'Ошибка загрузки данных', type_notification.danger);
        }
        dispatch(changeLoadingOneCall(false));
    })
};