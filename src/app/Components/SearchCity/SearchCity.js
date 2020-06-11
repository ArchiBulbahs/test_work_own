import React from 'react';
import style from './style.module.scss'
import {connect} from "react-redux";
import {getWeatherNowCreatorThunk} from '../../../store/weatherNow/thunkCreator'
import {addNotification, type_notification} from "../../Pages/System/InfoMessage/action";
import {dictionary} from "../../../libs/language/language";

class SearchCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueCity: '',
            inputFocus: false,
        }
    }

    changeValueCity = (e) => {
        this.setState({valueCity: e});
    };

    clickSearchButton = () => {
        const {
            getWeatherNow,
            settings,
            weatherNow,
        } = this.props;
        if (!weatherNow.load || weatherNow.city !== this.state.valueCity) {
            if (!!this.state.valueCity.length) {
                getWeatherNow(this.state.valueCity, settings.language, settings.units)
                this.setState({inputFocus: false})
            } else {
                addNotification('', 'Введите название города', type_notification.warning)
            }
        } else {
            addNotification('', 'Данные о погоде уже были загружены', type_notification.warning)
        }
    };

    componentDidMount() {
        const {
            getWeatherNow,
            settings,
            weatherNow
        } = this.props;
        if (!weatherNow.load && !!settings.lastSearch.length) {
            this.setState({valueCity: settings.lastSearch});
            getWeatherNow(settings.lastSearch, settings.language, settings.units)
        }
    }

    changeSuggestItem = (city) => {
        const {
            getWeatherNow,
            settings,
            weatherNow
        } = this.props;

        if (city.toLowerCase() !== weatherNow.city.toLowerCase()) {
            this.setState({valueCity: city});
            getWeatherNow(city, settings.language, settings.units);
            this.setState({inputFocus: false})
        }
    };


    render() {
        const {valueCity, inputFocus} = this.state;
        const {settings} = this.props;
        let count = 0;
        let suggest = !!valueCity.length ? settings.listSearch.map((item, key) => {
            if (count < 5) {
                if (item.toLowerCase().indexOf(valueCity.toLowerCase()) >= 0) {
                    count++;
                    return <p className="item" onClick={() => this.changeSuggestItem(item)} key={key}>{item}</p>
                }
            }
            return null
        }) : null;
        return (
            <div className={style.blockSearchCity}>
                <div className={style.blockTop}>
                    <input type="text"
                           onChange={(e) => this.changeValueCity(e.target.value)}
                           onFocus={() => this.setState({inputFocus: true})}
                           onBlur={() => setTimeout(() => {
                               this.setState({inputFocus: false})
                           }, 250)}
                           onKeyUp={(e) => e.keyCode === 13 ? this.clickSearchButton() : null}
                           value={valueCity}
                    />
                    <div onClick={() => this.clickSearchButton()}>
                        <p>
                            {dictionary.search[settings.language]}
                        </p>
                    </div>
                </div>
                <div className={style.blockBody}>
                    {inputFocus && suggest}
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
    getWeatherNow: getWeatherNowCreatorThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchCity)