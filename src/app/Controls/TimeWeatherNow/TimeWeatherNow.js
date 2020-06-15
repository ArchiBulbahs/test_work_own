import React from 'react';
import style from './style.module.scss';

function TimeWeatherNow(props) {
    const {
        nameTimeDay,
        img,
        temp,
        description
    } = props;
    return (
        <div className={style.blockTimeWeatherNow}>
            <p className={style.time}>
                {nameTimeDay}
            </p>
            <img src={img} alt={description} className={style.img}/>
            <p className={style.temp}>
                {temp > 0 ? `+${Math.round(temp)}` : Math.round(temp)}°
            </p>
            <p className={style.description}>
                {description}
            </p>
        </div>
    )
}

export default TimeWeatherNow;