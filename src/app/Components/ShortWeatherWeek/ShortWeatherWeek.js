import React from 'react';
import style from './style.module.scss';
import ShortDayWeatherWeek from '../../Controls/ShortDayWeatherWeek/ShortDayWeatherWeek';
import {getNameDay, getFormatDate} from '../../../libs/dateFormats/dateFormats'
import {connect} from "react-redux";
import {getInfoWeather} from "../../../libs/infoWeather/infoWeather";


class ShortWeatherWeek extends React.Component {
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

        let max = daily.reduce((max, item) => {
            return max > Math.round(item.temp.day) ? max : Math.round(item.temp.day);
        }, -1000);
        let min = daily.reduce((min, item) => {
            return min < Math.round(item.temp.day) ? min : Math.round(item.temp.day);
        }, 1000);

        let list = !!daily.length ? daily.map((item, key) => {
            let date = new Date((item.dt + weatherNow.timezone) * 1000);
            let infoWeather = getInfoWeather(item.weather[0].id, item.dt + weatherNow.timezone, settings.language);

            return <ShortDayWeatherWeek
                percent={100 - ((max - Math.round(item.temp.day)) * (100 / (max - min)))}
                tempDay={Math.round(item.temp.day)}
                tempNight={Math.round(item.temp.night)}
                nameDay={getNameDay(date.getUTCDay(),settings.language)}
                date={getFormatDate(date, settings.language)}
                img={infoWeather.img}
                description={infoWeather.description}
                key={key}
            />
        }) : null;

        return (
            <div className={style.blockShortWeatherWeek}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShortWeatherWeek)