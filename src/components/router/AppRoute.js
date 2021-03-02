import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../views/Home'
import Inicio from '../views/Inicio'
import Series from '../views/Series'

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/browse" exact component={ Home } />
                <Route path="/inicio" exact component={ Inicio } />
                <Route path="/series" component={ Series } />
                    
                <Redirect to="/browse" />
            </Switch>
        </Router>    
    )
}

export default AppRoute
