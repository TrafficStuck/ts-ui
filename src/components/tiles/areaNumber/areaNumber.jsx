import React, { useState, useEffect } from "react"

import ChartHeader from "@components/common/chart/chartHeader"
import ChartMessage from "@components/common/chart/chartMessage"
import ChartCell from "@components/common/chart/chartCell"
import ChartInfo from "@components/common/chart/chartInfo"
import AreaChart from "@components/tiles/areaNumber/areaChart"
import Loader from "@components/common/loader/Loader"

import request from "@utils/request"
import { TIMESERIES_PATH } from "@utils/constants"
import { convertToHour } from "@utils/helpers"


const AreaNumber = ({ route, path, title, period: delta, openHelp }) => {

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
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp}/>
            <ChartMessage text="No route chosen" icon="empty-icon"/>
        </ChartCell>
    )
    else if (error) return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp}/>
            <ChartMessage text="Data could not be loaded" icon="error-icon"/>
        </ChartCell>
    )
    else if (loading) return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp}/>
            <Loader />
        </ChartCell>
    )
    else if (!timeseries.length) return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp}/>
            <ChartMessage text="No data points" icon="warning-icon"/>
        </ChartCell>
    )

    const lastValue = timeseries[timeseries.length - 1].value.toFixed(2)
    const period = convertToHour(delta)

    return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title} subtitle={route} openHelp={openHelp}/>
            <ChartInfo main={lastValue} sub={`Period: ${period}h`}/>
            <AreaChart data={timeseries}/>
        </ChartCell>
    )
}

export default AreaNumber
