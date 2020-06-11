import React from 'react';
import style from './style.module.scss';

export default class ShortDayWeatherWeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const {
            percent,
            tempDay,
            tempNight,
            nameDay,
            date,
            img,
            description
        } = this.props;

        let padding = (100 / 100) * (100 - percent);

        return (
            <div className={style.shellShortDayWeatherWeek} style={{paddingTop: padding + 'px'}}>
                <div className={style.blockShortDayWeatherWeek}>
                    <p className={style.tempDay}>
                        {tempDay > 0 ? `+${Math.round(tempDay)}` : Math.round(tempDay)}°
                    </p>
                    <p className={style.tempNight} style={{paddingBottom: 100 - padding + 'px'}}>
                        {tempNight > 0 ? `+${Math.round(tempNight)}` : Math.round(tempNight)}°
                    </p>
                    <img src={img} alt={description} className={style.img}/>
                    <p className={style.nameDay}>
                        {nameDay}
                    </p>
                    <p className={style.date}>
                        {date}
                    </p>
                </div>
            </div>
        )
    }
}