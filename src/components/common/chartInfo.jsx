import React from "react"


const ChartInfo = ({ main, sub }) => {
    return (
        <div className="chart-info">
            <div className="chart-info-main">
                {main}
            </div>
            <div className="chart-info-sub">
                {sub}
            </div>
        </div>
    )
}

export default ChartInfo
