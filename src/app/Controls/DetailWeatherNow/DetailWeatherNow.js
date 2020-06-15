import React from 'react';
import style from './style.module.scss';
import {dictionary} from "../../../libs/language/language";


function DetailWeatherNow(props) {
    const {
        nameTime,
        img,
        temp,
        description,
        feels_like,
        pressure,
        humidity,
        wind,
        language,
        units
    } = props;
    return (
        <div className={style.blockDetailWeatherNow}>
            <p className={style.title}>
                {nameTime}
            </p>
            <div className={style.imgTemp}>
                <img src={img} alt={description}/>
                <span>{temp > 0 ? `+${Math.round(temp)}` : Math.round(temp)}°</span>
            </div>
            <p className={style.description}>
                {description}
            </p>
            <p className={style.info}>
                <span>{dictionary.feels_like[language]} {feels_like > 0 ? `+${Math.round(feels_like)}` : Math.round(feels_like)}°</span>
                <span>{dictionary.pressure[language]} {(pressure / 1.333).toFixed(0)} {dictionary.mmHg[language]}</span>
            </p>
            <p className={style.info}>
                <span>{dictionary.humidity[language]} {humidity} %</span>
                <span>{dictionary.wind[language]} {wind.deg} {wind.speed} {dictionary.units[units][language]}</span>
            </p>
        </div>
    )
}

export default DetailWeatherNow;