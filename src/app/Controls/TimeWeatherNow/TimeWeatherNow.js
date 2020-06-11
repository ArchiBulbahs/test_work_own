import React from 'react';
import style from './style.module.scss';

export default class TimeWeatherNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const {
            nameTimeDay,
            img,
            temp,
            description
        } = this.props;
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
}