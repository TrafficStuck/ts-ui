import React from "react"

import { AreaChart as AreaContainer, Area, YAxis } from "recharts"

import { YELLOW_COLOR, CHART_HEIGHT, CHART_WIDTH, CHART_ANIMATION } from "@utils/constants"


const AreaChart = ({ data }) => {
    return (
        <AreaContainer
            width={CHART_WIDTH}
            height={CHART_HEIGHT}
            data={data}
            margin={null}
        >
            <defs>
                <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="25%" stopColor={YELLOW_COLOR} stopOpacity={1}/>
                    <stop offset="100%" stopColor={YELLOW_COLOR} stopOpacity={0}/>
                </linearGradient>
            </defs>
            <YAxis domain={[0, "dataMax + 5"]} hide={true}/>
            <Area
                dataKey="value"
                stroke={null}
                fill="url(#area-gradient)"
                animationDuration={CHART_ANIMATION}
            />
        </AreaContainer>
    )
}

export default AreaChart
