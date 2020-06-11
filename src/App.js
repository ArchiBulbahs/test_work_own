import React from 'react';
import Routers from './Routers'
import './style.scss'
// import './fonts/muli/style.css'
import {connect} from "react-redux";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=84f31985-8897-405b-b1b3-7c6208db15a4&lang=ru_RU';
        document.head.appendChild(script)
    }

    render() {
        return (
            <div className="root-app">
                <Routers/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(App)
