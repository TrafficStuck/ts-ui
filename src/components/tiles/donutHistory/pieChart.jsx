import React from "react"

import { PieChart as PieContainer, Pie, Cell } from "recharts"

import {
    RED_YELLOW_GRADIENT,
    YELLOW_COLOR,
    CHART_HEIGHT,
    CHART_WIDTH,
    BLACK_LIGHT_COLOR,
    CHART_ANIMATION,
} from "@utils/constants"

const CHART_PIE_INNER_RADIUS = 75
const CHART_PIE_OUTER_RADIUS = 110
const CHART_PIE_ANGLE = 270
const CHART_PIE_HEIGHT = CHART_HEIGHT + 25


const PieChart = ({ data }) => {
    const colorIndex = Math.ceil(data.value / 10) - 1

    const formatPie = (data) => {
        const { id, value } = data
        return [
            { id, value: 100 - value },
            { id, value },
        ]
    }

    return (
        <PieContainer
            width={CHART_WIDTH}
            height={CHART_PIE_HEIGHT}
        >
            <Pie
                data={formatPie(data)}
                dataKey="value"
                innerRadius={CHART_PIE_INNER_RADIUS}
                outerRadius={CHART_PIE_OUTER_RADIUS}
                startAngle={-CHART_PIE_ANGLE}
                endAngle={CHART_PIE_ANGLE}
                stroke={BLACK_LIGHT_COLOR}
                animationBegin={0}
                animationDuration={CHART_ANIMATION}
            >
                <Cell key={`cell-${1}`} fill={YELLOW_COLOR} opacity={0.1}/>
                <Cell key={`cell-${2}`} fill={RED_YELLOW_GRADIENT[colorIndex]}/>
            </Pie>
        </PieContainer>
    )
}

export default PieChart
