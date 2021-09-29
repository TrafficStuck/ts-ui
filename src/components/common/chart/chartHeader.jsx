import React from "react"

import Icon from "@icons/icon"
import { NORMAL_ICON_SIZE } from "@utils/constants"

import "./chart.sass"


const ChartHeader = ({ title, subtitle, refresh, openHelp = null }) => {
    return (
        <div className="chart-header">
            <div
                onClick={refresh}
                className="chart-title"
            >
                {title}{subtitle && <span className="chart-subtitle"> / {subtitle}</span>}
            </div>
            {openHelp
                && <div onClick={openHelp}>
                    <Icon name="info-icon" className="chart-info-icon" viewBox="0 0 28 28" size={NORMAL_ICON_SIZE}/>
                </div>
            }
        </div>
    )
}

export default ChartHeader
