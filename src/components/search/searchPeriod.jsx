import React from "react"

import Slider from "@material-ui/core/Slider"


const SearchPeriod = ({ period, setPeriod }) => {
    return (
        <div className="search-period">
            <div className="search-period-title">
                Period:
                <span className="search-period-value">
                    {period}h
                </span>
            </div>
            <div className="search-period-slider">
                <Slider
                    value={parseInt(period)}
                    onChange={(event, value) => setPeriod(value)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="off"
                    min={1}
                    max={24}
                />
            </div>
        </div>
    )
}

export default SearchPeriod
