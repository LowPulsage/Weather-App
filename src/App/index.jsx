import React from 'react'

import Home from '../screens/Home'
import WeatherForWeek from '../screens/WeatherForWeek'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const App = props => {
    return (
        <Router>
            <Route exact path="/weatherForWeek">
                <WeatherForWeek />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Router>
    )
}

export default App