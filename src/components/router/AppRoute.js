import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Inicio from '../views/Inicio'
import Series from '../views/Series'
import MiLista from '../views/MiLista'
import NovedadesPopulares from '../views/NovedadesPopulares'
import Peliculas from '../views/Peliculas'

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ Inicio } />
                <Route path="/series" component={ Series } />
                <Route path="/peliculas" component={ Peliculas } />
                <Route path="/novedades" component={ NovedadesPopulares } />
                <Route path="/milista" component={ MiLista } />

                <Redirect to="/" />
            </Switch>
        </Router>    
    )
}

export default AppRoute
