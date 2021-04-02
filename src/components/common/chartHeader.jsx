import React from "react"

import "./common.sass"


const ChartHeader = ({ title, subtitle, refresh }) => {
    return (
        <div className="chart-header">
            <div
                onClick={refresh}
                className="chart-title"
            >
                {title}
            </div>
            <div className="chart-subtitle">{subtitle}</div>
        </div>
    )
}

export default ChartHeader
