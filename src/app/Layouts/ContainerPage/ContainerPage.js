import React from 'react';
import style from './style.module.scss';

export default class containerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.blockContainerPage}>
                {this.props.children}
            </div>
        )
    }
}