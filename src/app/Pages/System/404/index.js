import React from 'react';
import './style.scss'

export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="block-page-error">
                <div className="block-center-page-error">
                    <p className="title-page-error">
                        404
                    </p>
                    <p className="description-page-error">
                        Sorry but we could not find the page you are looking for
                    </p>
                </div>
            </div>
        )
    }
}