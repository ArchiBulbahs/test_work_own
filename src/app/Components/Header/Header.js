import React from 'react';
import style from './style.module.scss';
import UnitsButton from '../UnitsButton/UnitsButton';
import LanguageButton from '../LanguageButton/LanguageButton'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className={style.blockHeader}>
                <UnitsButton/>
                <LanguageButton/>
            </div>
        )
    }
}
