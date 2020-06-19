import React from 'react';
import style from './style.module.scss'
import {setSettingsLanguage} from "../../../store/settings/action";
import {connect} from "react-redux";

class LanguageButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const {
            settings,
            setSettingsLanguage
        } = this.props;

        return (
            <div className={style.blockLanguageButton}>
                <div className={`${style.button} ${settings.language === 'ru' ? style.buttonActive : null}`}
                     onClick={() => settings.language !== 'ru' ? setSettingsLanguage('ru') : null}
                >
                    <p>
                        RU
                    </p>
                </div>
                <div className={`${style.button} ${settings.language === 'en' ? style.buttonActive : null}`}
                     onClick={() => settings.language !== 'en' ? setSettingsLanguage('en') : null}
                >
                    <p>
                        EN
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        settings: state.settings
    }
};

const mapDispatchToProps = {
    setSettingsLanguage
};
export default connect(mapStateToProps, mapDispatchToProps)(LanguageButton)