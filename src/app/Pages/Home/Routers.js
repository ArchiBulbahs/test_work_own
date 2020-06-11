import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Page/Home'
import Error404 from "../System/404";


const Routes = () => (
    <Switch>
        <Route exact path={'/'} component={Home}/>

        <Route component={Error404}/>
    </Switch>
);

export default Routes