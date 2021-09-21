import React from "react"

import Icon from "@icons/icon"
import { BIG_ICON_SIZE } from "@utils/constants"

import "./chart.sass"


const ChartMessage = ({ icon, text }) => {
    return (
        <div className="chart-message">
            <div className="chart-message-text">
                {text}
            </div>
            <Icon
                name={icon}
                className="chart-message-icon"
                size={BIG_ICON_SIZE}
            />
        </div>
    )
}

export default ChartMessage
