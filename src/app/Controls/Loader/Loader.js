import React from 'react';
import style from './style.module.scss'

export default class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className={style.shellLoader}>
                <div className={style.loader}>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        )
    }
}