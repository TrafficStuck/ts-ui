import React, { useEffect, useState } from "react"

import ChartHeader from "@components/common/chartHeader"
import ChartLoader from "@components/common/chartLoader"
import ChartMessage from "@components/common/chartMessage"
import ChartInfo from "@components/common/chartInfo"
import ChartCell from "@components/common/chartCell"
import PieChart from "@components/tiles/donutHistory/pieChart"
import BarChart from "@components/tiles/donutHistory/barChart"

import request from "@utils/request"
import { CONGESTION_PATH } from "@utils/constants"

import "./donutHistory.sass"


const CHART_LIMIT_ITEMS = 18


const DonutHistory = ({ title }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => queryData(), [])

    const queryData = () => {
        setLoading(true)

        const endpointPath = `${CONGESTION_PATH}/${title}`
        request.get(endpointPath, { limit: CHART_LIMIT_ITEMS })
            .then(response => {
                const { result } = response.data
                setLoading(false)
                setError(false)
                setData(result)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }

    if (error) return (
        <ChartCell className="donut-history">
            <ChartHeader refresh={queryData} title={title} />
            <ChartMessage text="Data could not be loaded" icon="error-icon"/>
        </ChartCell>
    )
    else if (loading) return (
        <ChartCell className="donut-history">
            <ChartHeader refresh={queryData} title={title} />
            <ChartLoader/>
        </ChartCell>
    )
    else if (!data.length) return (
        <ChartCell className="donut-history">
            <ChartHeader refresh={queryData} title={title} />
            <ChartMessage text="No data points" icon="warning-icon"/>
        </ChartCell>
    )

    const lastItem = data[data.length - 1]
    const lastItemPercentage = `${Math.round(lastItem.value)}%`
    return (
        <ChartCell className="donut-history">
            <ChartHeader refresh={queryData} title={title} />
            <div className="pie-chart">
                <ChartInfo main={lastItemPercentage} />
                <PieChart data={lastItem} />
            </div>
            <div className="bar-chart">
                <BarChart data={data} />
            </div>
        </ChartCell>
    )
}

export default DonutHistory
