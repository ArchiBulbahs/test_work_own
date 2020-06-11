import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App'

import Config from './config/Config';

import axios from 'axios'

import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './store/reducer'
import {Provider} from 'react-redux';
import {
    setSettingsLanguage,
    setSettingsUnits,
    setSettingsLastSearch,
    setSettingsListSearch
} from './store/settings/action'

window.LocalConfig = process.env.NODE_ENV !== 'production' ? Config.DEV : Config.PROD;

axios.defaults.baseURL = window.LocalConfig.PROXY;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

if (localStorage.units) {
    store.dispatch(setSettingsUnits(localStorage.units))
}
if (localStorage.language) {
    store.dispatch(setSettingsLanguage(localStorage.language))
}
if (localStorage.lastSearch) {
    store.dispatch(setSettingsLastSearch(localStorage.lastSearch))
}
if (localStorage.listSearch) {
    store.dispatch(setSettingsListSearch(JSON.parse(localStorage.listSearch)))
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));