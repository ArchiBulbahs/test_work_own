import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './app/Pages/Home/index'
import Info from './app/Pages/Info/index'
import Error404 from './app/Pages/System/404/index'


const Routes = () => (
    <Switch>
        <Route exact path={'/info'} component={Info}/>

        <Route path={'/'} component={Home}/>
        <Route component={Error404}/>
    </Switch>
);

export default Routes