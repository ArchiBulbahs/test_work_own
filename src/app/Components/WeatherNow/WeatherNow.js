import React from 'react';
import style from './style.module.scss';
import DetailWeatherNow from '../../Controls/DetailWeatherNow/DetailWeatherNow';
import TimeWeatherNow from '../../Controls/TimeWeatherNow/TimeWeatherNow';
import {connect} from "react-redux";
import {getInfoWeather} from '../../../libs/infoWeather/infoWeather'
import {nameTimeDay} from '../../../libs/dateFormats/dateFormats'
import {degToDirection} from "../../../libs/function/function";
import {dictionary} from "../../../libs/language/language";

class WeatherNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const {
            weatherNow,
            oneCall,
            settings
        } = this.props;

        let infoWeather = getInfoWeather(weatherNow.code_weather, weatherNow.date, settings.language);

        let timeDayWeather = [];
        if (!!oneCall.hourly.length) {
            let kol = 0;
            for (let i = 2; i < 20; i++) {
                let date = new Date((oneCall.hourly[i].dt + weatherNow.timezone) * 1000);
                if (date.getUTCHours() === 0 || date.getUTCHours() === 6 || date.getUTCHours() === 12 || date.getUTCHours() === 18) {
                    if (date.getUTCDate() > new Date(weatherNow.date * 1000).getUTCDate()) {
                        timeDayWeather.push({...oneCall.hourly[i], timeDay: date.getUTCHours() + 24})
                    } else {
                        timeDayWeather.push({...oneCall.hourly[i], timeDay: date.getUTCHours()})
                    }
                    kol++;
                    if (kol >= 3) {
                        i = 31
                    }
                }
            }
        }

        let listWeatherTimeDay = !!timeDayWeather.length ? timeDayWeather.map((item, key) => {
            let infoWeather = getInfoWeather(item.weather[0].id, item.dt + weatherNow.timezone, settings.language);
            return <TimeWeatherNow
                nameTimeDay={nameTimeDay[item.timeDay][settings.language]}
                img={infoWeather.img}
                temp={item.temp}
                description={infoWeather.description}
                key={key}
            />
        }) : null;

        return (
            <React.Fragment>
                {weatherNow.load || !!weatherNow.city ?
                    <div className={style.blockWeatherNow}>
                        <p className={style.titleWeatherNow}>
                            {dictionary.weather[settings.language]}
                            <span>{weatherNow.city}</span>
                        </p>

                        <div className={style.blockInfoWeatherNow}>
                            <div className={style.blockInfoLeftWeatherNow}>
                                <DetailWeatherNow
                                    nameTime={nameTimeDay[0][settings.language]}
                                    img={infoWeather.img}
                                    temp={weatherNow.temp}
                                    description={infoWeather.description}
                                    feels_like={weatherNow.feels_like}
                                    pressure={weatherNow.pressure}
                                    humidity={weatherNow.humidity}
                                    wind={{
                                        ...weatherNow.wind,
                                        deg: degToDirection(weatherNow.wind.deg, settings.language)
                                    }}
                                    language={settings.language}
                                    units={settings.units}
                                />

                            </div>
                            <div className={style.blockInfoRightWeatherNow}>
                                {listWeatherTimeDay}
                            </div>
                        </div>
                    </div> : null
                }

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        weatherNow: state.weatherNow,
        settings: state.settings,
        oneCall: state.oneCall
    }
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherNow)