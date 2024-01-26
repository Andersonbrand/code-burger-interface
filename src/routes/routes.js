import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import paths from '../constants/paths'
import PrivateRoutes from '../routes/private-routes'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
                <PrivateRoutes exact component={Home} path="/" />
                <PrivateRoutes component={Products} path="/produtos" />
                <PrivateRoutes component={Cart} path="/carrinho" />

                <PrivateRoutes component={Admin} path={paths.Order} isAdmin />
                <PrivateRoutes component={Admin} path={paths.Products} isAdmin />
            </Switch>
        </Router>
    )
}

export default Routes