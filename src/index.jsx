import ReactDOM from "react-dom"
import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import NavigationBar from "./components/navigation/navigationBar"
import GeneralPage from "./components/pages/general.jsx"
import DistrictsPage from "./components/pages/districts.jsx"
import TrafficPage from "./components/pages/traffic.jsx"
import TransportPage from "@components/pages/transport.jsx"

import "./index.sass"

ReactDOM.render(
    <div className="traffic-stuck-app">
        <React.Fragment>
            <Router>
                <NavigationBar />
                <Switch>
                    <Route path="/general" component={GeneralPage} />
                    <Route path="/districts" component={DistrictsPage} />
                    <Route path="/traffic" component={TrafficPage} />
                    <Route path="/transport" component={TransportPage} />
                    <Redirect path="*" to="/general"/>
                </Switch>
            </Router>
        </React.Fragment>
    </div>,
    document.getElementById("traffic-stuck"),
)
