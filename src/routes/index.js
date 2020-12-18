import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Dashboard from '../pages/Dashboard/index'
import Repository from '../pages/Repository/index'


function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/repositorio/:repositorio+" component={Repository}/>
        </Switch>
    );
}

export default Routes;