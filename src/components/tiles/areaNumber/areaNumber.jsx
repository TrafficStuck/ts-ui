import React, { useState, useEffect } from "react"

import ChartHeader from "@components/common/chartHeader"
import ChartLoader from "@components/common/chartLoader"
import ChartMessage from "@components/common/chartMessage"
import ChartCell from "@components/common/chartCell"
import ChartInfo from "@components/common/chartInfo"
import AreaChart from "@components/tiles/areaNumber/areaChart"

import request from "@utils/request"
import { TIMESERIES_PATH } from "@utils/constants"
import { convertToHour } from "@utils/helpers"


const AreaNumber = ({ route, path, title, period: delta }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [timeseries, setTimeseries] = useState([])

    useEffect(() => queryData(), [route, delta])

    const queryData = () => {
        if (!route) return

        setLoading(true)
        const endpointPath = `${TIMESERIES_PATH}/${route}/${path}`
        request.get(endpointPath, { delta })
            .then(response => {
                setLoading(false)
                setError(false)
                setTimeseries(response.data.result)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }

    if (!route) return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title}/>
            <ChartMessage text="No route chosen" icon="empty-icon"/>
        </ChartCell>
    )
    else if (error) return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title}/>
            <ChartMessage text="Data could not be loaded" icon="error-icon"/>
        </ChartCell>
    )
    else if (loading) return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title}/>
            <ChartLoader />
        </ChartCell>
    )
    else if (!timeseries.length) return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title}/>
            <ChartMessage text="No data points" icon="warning-icon"/>
        </ChartCell>
    )

    const lastValue = timeseries[timeseries.length - 1].value.toFixed(2)
    const period = convertToHour(delta)

    return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title} subtitle={route}/>
            <ChartInfo main={lastValue} sub={`Period: ${period}h`}/>
            <AreaChart data={timeseries}/>
        </ChartCell>
    )
}

export default AreaNumber
