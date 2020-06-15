import React from 'react';
import style from './style.module.scss';
import UnitsButton from '../UnitsButton/UnitsButton';
import LanguageButton from '../LanguageButton/LanguageButton'


function Header() {
    return (
        <div className={style.blockHeader}>
            <UnitsButton/>
            <LanguageButton/>
        </div>
    )
}

export default Header;