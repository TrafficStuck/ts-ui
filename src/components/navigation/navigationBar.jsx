import React from "react"

import NavigationButton from "./navigationButton"
import "./navigation.sass"


const NavigationBar = () => {
    return (
        <div className="nav-bar">
            <NavigationButton label="general" to="/general" />
            <NavigationButton label="traffic" to="/traffic" />
            <NavigationButton label="districts" to="/districts" />
            <NavigationButton label="transport" to="/transport" />
        </div>
    )
}

export default NavigationBar
