import React from 'react';
import {connect} from "react-redux";
import './style.scss';

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="block-container-info-message">
                <ReactNotification/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Controller)