import {CHANGE_LOADING_ONE_CALL, SAVE_INFO_ONE_CALL} from './action';

const defaultStore = {
    loading: false, // данные отсутствуют
    hourly: [], // [] массив с почасовой информацией о погода на 48 часов
    daily: [], // [] массив с суточной информацией о погоде на 8 суток включая сегодняшние
};


export const oneCall = (store = defaultStore, action) => {
    let save = null;
    switch (action.type) {
        case CHANGE_LOADING_ONE_CALL:
            save = {
                ...store,
                loading: action.payload
            };
            break;
        case SAVE_INFO_ONE_CALL:
            if (action.payload) {
                save = {
                    ...store,
                    hourly: action.payload.hourly,
                    daily: action.payload.daily,
                };
            } else {
                save = store;
            }
            break;
        default:
            save = store;
    }
    // console.log(save);
    return save;
};