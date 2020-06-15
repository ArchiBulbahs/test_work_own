import React from 'react';
import style from './style.module.scss'
import {dictionary} from '../../../libs/language/language'


function DetailDayWeatherWeek(props) {
    const {
        nameDay,
        date,
        sunrise,
        sunset,
        img,
        description,
        feels_like,
        pressure,
        humidity,
        wind,
        temp,
        language,
        units
    } = props;
    return (
        <div className={style.blockDetailDayWeatherWeek}>
            <div className={style.blockTop}>
                <p className={style.groupDay}>
                    <span className={`${style.itemGroupDay} ${style.nameDay}`}>{nameDay}</span>
                    <span className={`${style.itemGroupDay} ${style.date}`}>{date}</span>
                    <span
                        className={`${style.itemGroupDay} ${style.timeSun}`}>{dictionary.sunrise[language]} {sunrise}<br/>{dictionary.sunset[language]} {sunset}</span>
                </p>
                <img src={img} alt={description} className={style.img}/>
                <p className={style.description}>
                    {description}
                </p>
                <div className={style.groupInfo}>
                    <p className={style.info}>
                        <span>{dictionary.feels_like[language]} {feels_like > 0 ? `+${Math.round(feels_like)}` : Math.round(feels_like)}°</span>
                        <span>{dictionary.pressure[language]} {Math.round(pressure / 1.333)} {dictionary.mmHg[language]}</span>
                    </p>
                    <p className={style.info}>
                        <span>{dictionary.humidity[language]} {humidity} %</span>
                        <span>{dictionary.wind[language]} {wind.deg} {wind.speed} {dictionary.units[units][language]}</span>
                    </p>
                </div>
            </div>
            <div className={style.blockBottom}>
                <div className={style.blockTime}>
                    <p className={style.titleTime}>
                        {dictionary.morn[language]}
                    </p>
                    <p className={style.temp}>
                        {temp.morn > 0 ? `+${Math.round(temp.morn)}` : Math.round(temp.morn)}°
                    </p>
                </div>
                <div className={style.blockTime}>
                    <p className={style.titleTime}>
                        {dictionary.day[language]}
                    </p>
                    <p className={style.temp}>
                        {temp.day > 0 ? `+${Math.round(temp.day)}` : Math.round(temp.day)}°
                    </p>
                </div>
                <div className={style.blockTime}>
                    <p className={style.titleTime}>
                        {dictionary.eve[language]}
                    </p>
                    <p className={style.temp}>
                        {temp.eve > 0 ? `+${Math.round(temp.eve)}` : Math.round(temp.eve)}°
                    </p>
                </div>
                <div className={style.blockTime}>
                    <p className={style.titleTime}>
                        {dictionary.night[language]}
                    </p>
                    <p className={style.temp}>
                        {temp.night > 0 ? `+${Math.round(temp.night)}` : Math.round(temp.night)}°
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailDayWeatherWeek;