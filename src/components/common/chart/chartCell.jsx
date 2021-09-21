import React from "react"

import "./chart.sass"


const ChartCell = ({ className, children }) => {
    return (
        <div className={`chart-cell ${className}`}>
            {children}
        </div>
    )
}

export default ChartCell
