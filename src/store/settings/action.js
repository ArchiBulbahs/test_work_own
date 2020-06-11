export const SET_SETTINGS_LANGUAGE = 'SET_SETTINGS_LANGUAGE';
export const SET_SETTINGS_UNITS = 'SET_SETTINGS_UNITS';
export const SET_SETTINGS_LAST_SEARCH = 'SET_SETTINGS_LAST_SEARCH';
export const SET_SETTINGS_SEARCH = 'SET_SETTINGS_SEARCH';
export const SET_SETTINGS_LIST_SEARCH = 'SET_SETTINGS_LIST_SEARCH';

export const setSettingsLanguage = (language) => {
    return {
        type: SET_SETTINGS_LANGUAGE,
        payload: language
    }
};
export const setSettingsUnits = (units) => {
    return {
        type: SET_SETTINGS_UNITS,
        payload: units
    }
};
export const setSettingsLastSearch = (city) => {
    return {
        type: SET_SETTINGS_LAST_SEARCH,
        payload: city
    }
};
export const setSettingsSearch = (city) => {
    return {
        type: SET_SETTINGS_SEARCH,
        payload: city
    }
};
export const setSettingsListSearch = (arrayCity) => {
    return {
        type: SET_SETTINGS_LIST_SEARCH,
        payload: arrayCity
    }
};