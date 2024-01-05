import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import Products from '../containers/Products'
import PrivateRoutes from '../containers/Home'

function Routes() {

    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
                <PrivateRoutes exact component={Home} path="/" />
                <PrivateRoutes component={Products} path="/produtos" />
            </Switch>
        </Router>
    )
}

export default Routes