import React from "react"

import NavigationButton from "./navigationButton"
import "./navigation.sass"


const NavigationBar = () => {
    return (
        <div className="nav-bar">
            <NavigationButton label="regions" to="/regions" />
            <NavigationButton label="transport" to="/transport" />
            <NavigationButton label="traffic" to="/traffic" />
        </div>
    )
}

export default NavigationBar
