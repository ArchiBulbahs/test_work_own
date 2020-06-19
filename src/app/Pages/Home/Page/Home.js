import React from 'react';
import './style.scss'
import SearchCity from '../../../Components/SearchCity/SearchCity';
import WeatherNow from '../../../Components/WeatherNow/WeatherNow';
import WeatherWeek from '../../../Components/WeatherWeek/WeatherWeek';
import Header from '../../../Components/Header/Header';
import {connect} from "react-redux";

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const {weatherNow} = this.props;
        return (
            <React.Fragment>
                <Header/>
                <SearchCity/>
                {weatherNow.load &&
                <React.Fragment>
                    <WeatherNow/>
                    <WeatherWeek/>
                </React.Fragment>
                }
                {!weatherNow.load &&
                    <React.Fragment>
                        {weatherNow.loading&&
                        <p className="message">Загрузка данных</p>
                        }
                        {!weatherNow.loading&&
                        <p className="message">Необходимо ввести название города в поисковую страку и нажать "Найти"</p>
                        }
                    </React.Fragment>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)