import React from 'react';
import style from './style.module.scss';
import DetailDayWeatherWeek from '../../Controls/DetailDayWeatherWeek/DetailDayWeatherWeek'
import {connect} from "react-redux";
import {getInfoWeather} from "../../../libs/infoWeather/infoWeather";
import {getFormatDate, getNameDay, getFormatTime} from "../../../libs/dateFormats/dateFormats";
import {degToDirection} from "../../../libs/function/function";

class DetailWeatherWeek extends React.Component {
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

        let daily = oneCall.daily.concat();
        daily = daily.length >= 8 ? daily.splice(1, daily.length) : daily;

        let list = !!daily.length ? daily.map((item, key) => {
            let date = new Date((item.dt + weatherNow.timezone) * 1000);
            let infoWeather = getInfoWeather(item.weather[0].id, item.dt + weatherNow.timezone, settings.language);

            return <DetailDayWeatherWeek
                nameDay={getNameDay(date.getUTCDay(), settings.language,'full')}
                date={getFormatDate(date, settings.language)}
                sunrise={getFormatTime(new Date((item.sunrise + weatherNow.timezone) * 1000))}
                sunset={getFormatTime(new Date((item.sunset + weatherNow.timezone) * 1000))}
                img={infoWeather.img}
                description={infoWeather.description}
                feels_like={item.feels_like.day}
                pressure={item.pressure}
                humidity={item.humidity}
                wind={{
                    deg: degToDirection(item.wind_deg, settings.language),
                    speed: item.wind_speed
                }}
                temp={item.temp}
                language={settings.language}
                units={settings.units}
                key={key}
            />
        }) : null;

        return (
            <div className={style.blockDetailWeatherWeek}>
                {list}
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailWeatherWeek)