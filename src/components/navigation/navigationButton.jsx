import React from "react"
import { NavLink } from "react-router-dom"

import Icon from "@icons/icon"
import { BIG_ICON_SIZE } from "@utils/constants"


const NavigationButton = ({ label, to }) => {
    return (
        <NavLink to={to} className="nav-item" activeClassName="nav-item-active">
            <Icon name={`${label}-icon`} className="nav-icon" size={BIG_ICON_SIZE}/>
            <div className="nav-label">{label}</div>
        </NavLink>
    )
}

export default NavigationButton
