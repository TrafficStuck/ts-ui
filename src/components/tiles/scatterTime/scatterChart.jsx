import React from "react"

import { ScatterChart as ScatterContainer, Scatter, XAxis, YAxis } from "recharts"

import { YELLOW_COLOR, CHART_HEIGHT, CHART_WIDTH } from "@utils/constants"


const SCATTER_CHART_HEIGHT = CHART_HEIGHT + 100


const ScatterChart = ({ data }) => {
    return (
        <ScatterContainer
            width={CHART_WIDTH}
            height={SCATTER_CHART_HEIGHT}
            margin={{ top: 15, left: 15, right: 15, bottom: 15 }}
        >
            <XAxis domain={["auto", "auto"]} type="number" dataKey="latitude" hide={true}/>
            <YAxis domain={["auto", "auto"]} type="number" dataKey="longitude" hide={true}/>
            <Scatter data={data} fill={YELLOW_COLOR}/>
        </ScatterContainer>
    )
}

export default ScatterChart
