import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../views/Home'
import MiLista from '../views/MiLista'
import NovedadesPopulares from '../views/NovedadesPopulares'
import Peliculas from '../views/Peliculas'
import Series from '../views/Series'


const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/browse" exact component={ Home } />
                <Route path="/series" exact component={ Series } />
                <Route path="/peliculas" component={ Peliculas } />
                <Route path="/novedades-populares" component={ NovedadesPopulares } />
                <Route path="/mi-lista" component={ MiLista } />
                    
                <Redirect to="/browse" />
            </Switch>
        </Router>    
    )
}

export default AppRoute
