import {
    SET_SETTINGS_LANGUAGE,
    SET_SETTINGS_UNITS,
    SET_SETTINGS_LAST_SEARCH,
    SET_SETTINGS_SEARCH,
    SET_SETTINGS_LIST_SEARCH
} from './action';

const defaultStore = {
    language: 'ru',
    units: 'metric',
    lastSearch: 'Минск',
    listSearch: []
};

export const settings = (store = defaultStore, action) => {
    let save = null;
    switch (action.type) {
        case SET_SETTINGS_LANGUAGE:
            if (action.payload) {
                save = {
                    ...store,
                    language: action.payload
                };
                localStorage.setItem('language', action.payload)
            } else {
                save = store;
            }
            break;
        case SET_SETTINGS_UNITS:
            if (action.payload) {
                save = {
                    ...store,
                    units: action.payload
                };
                localStorage.setItem('units', action.payload)

            } else {
                save = store;
            }
            break;
        case SET_SETTINGS_LAST_SEARCH:
            if (action.payload) {
                save = {
                    ...store,
                    lastSearch: action.payload
                };
                localStorage.setItem('lastSearch', action.payload)

            } else {
                save = store;
            }
            break;
        case SET_SETTINGS_SEARCH:
            if (action.payload) {
                let dub = store.listSearch.findIndex((item, key) =>
                    item.toLowerCase() === action.payload.toLowerCase()
                );
                if (dub < 0) {
                    let ls = store.listSearch.concat();
                    ls.push(action.payload)
                    save = {
                        ...store,
                        listSearch: ls
                    };
                    localStorage.setItem('listSearch', JSON.stringify(ls))
                } else {
                    save = store;
                }
            } else {
                save = store;
            }
            break;
        case SET_SETTINGS_LIST_SEARCH:
            if (action.payload) {
                save = {
                    ...store,
                    listSearch: action.payload
                };
            } else {
                save = store;
            }
            break;
        default:
            save = store;
    }
    return save;
};