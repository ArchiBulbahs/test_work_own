import React from 'react';
import style from './style.module.scss'
import ShortWeatherWeek from "../ShortWeatherWeek/ShortWeatherWeek";
import DetailWeatherWeek from "../DetailWeatherWeek/DetailWeatherWeek";
import {dictionary} from "../../../libs/language/language";
import {connect} from "react-redux";

class WeatherWeek extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            typeView: false
        }
    }

    changeTypeView = (type) => {
        if (type !== this.state.typeView)
            this.setState({typeView: type})
    };

    render() {
        const {typeView} = this.state;
        const {settings} = this.props;
        return (
            <div className={style.blockWeatherWeek}>
                <p className={style.title}>
                    {dictionary.weather_week[settings.language]}
                    <span className={typeView ? null : style.active}
                          onClick={() => this.changeTypeView(false)}>{dictionary.short[settings.language]}</span>
                    <span className={typeView ? style.active : null}
                          onClick={() => this.changeTypeView(true)}>{dictionary.detail[settings.language]}</span>
                </p>

                {typeView &&
                <DetailWeatherWeek/>
                }
                {!typeView &&
                <ShortWeatherWeek/>
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        settings: state.settings
    }
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherWeek)