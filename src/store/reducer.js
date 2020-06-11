import {combineReducers} from 'redux';
import {weatherNow} from './weatherNow/reducer'
import {oneCall} from './oneCall/reducer'
import {settings} from './settings/reducer'


export default combineReducers({
    weatherNow,
    oneCall,
    settings
});