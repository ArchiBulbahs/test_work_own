export const CHANGE_LOADING_ONE_CALL = 'CHANGE_LOADING_ONE_CALL';
export const SAVE_INFO_ONE_CALL = 'SAVE_INFO_ONE_CALL';


export const changeLoadingOneCall = (loader) => {
    return {
        type: CHANGE_LOADING_ONE_CALL,
        payload: loader
    }
};

export const saveInfoOneCall = (oneCall) => {
    return {
        type: SAVE_INFO_ONE_CALL,
        payload: oneCall
    }
};