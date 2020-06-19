import React from 'react';
import style from './style.module.scss'
import {connect} from "react-redux";
import {setSettingsUnits} from '../../../store/settings/action'
import {changeLoadWeatherNow} from '../../../store/weatherNow/action'
import {getWeatherNowCreatorThunk} from '../../../store/weatherNow/thunkCreator'
import {dictionary} from "../../../libs/language/language";

class UnitsButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    changeButtonUnits = (units) => {
        const {
            setSettingsUnits,
            changeLoadWeatherNow,
            getWeatherNow,
            weatherNow,
            settings
        } = this.props;
        setSettingsUnits(units);
        changeLoadWeatherNow(false);
        getWeatherNow(weatherNow.city, settings.language, units)
    };

    render() {
        const {
            settings,

        } = this.props;

        return (
            <div className={style.blockUnitsButton}>
                <div className={`${style.button} ${settings.units === 'metric' ? style.buttonActive : null}`}
                     onClick={settings.units !== 'metric' ? () => {
                         this.changeButtonUnits('metric')
                     } : null}
                >
                    <p>
                        °C {dictionary.m_s[settings.language]}
                    </p>
                </div>
                <div className={`${style.button} ${settings.units === 'imperial' ? style.buttonActive : null}`}
                     onClick={settings.units !== 'imperial' ? () => {
                         this.changeButtonUnits('imperial')
                     } : null}
                >
                    <p>
                        °F {dictionary.m_h[settings.language]}
                    </p>
                </div>
                <div className={`${style.button} ${settings.units === 'standard' ? style.buttonActive : null}`}
                     onClick={settings.units !== 'standard' ? () => {
                         this.changeButtonUnits('standard')
                     } : null}
                >
                    <p>
                        °K {dictionary.m_s[settings.language]}
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        weatherNow: state.weatherNow,
        settings: state.settings
    }
};

const mapDispatchToProps = {
    setSettingsUnits,
    changeLoadWeatherNow,
    getWeatherNow:getWeatherNowCreatorThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(UnitsButton)