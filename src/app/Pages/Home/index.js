import React from 'react';
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';
import ContainerPage from '../../Layouts/ContainerPage/ContainerPage';
import Routers from './Routers'

export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <React.Fragment>
                <ContainerLayout>
                    <ContainerPage>
                        <Routers/>
                    </ContainerPage>
                </ContainerLayout>
            </React.Fragment>
        )
    }
}