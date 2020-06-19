import React from 'react';
import style from './style.module.scss';
import ControllerInfoMessage from "../../Pages/System/InfoMessage/Controller";

export default class containerLayout extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className={style.blockContainerLayout}>
                {this.props.children}
                <ControllerInfoMessage/>
            </div>
        )
    }
}