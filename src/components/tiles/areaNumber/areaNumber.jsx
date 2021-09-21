import React, { useState, useEffect } from "react"

import ChartHeader from "@components/common/chart/chartHeader"
import ChartMessage from "@components/common/chart/chartMessage"
import ChartCell from "@components/common/chart/chartCell"
import ChartInfo from "@components/common/chart/chartInfo"
import AreaChart from "@components/tiles/areaNumber/areaChart"
import Loader from "@components/common/loader/Loader"
import ChartHelp from "@components/common/chart/chartHelp"

import request from "@utils/request"
import { TIMESERIES_PATH } from "@utils/constants"
import { convertToHour } from "@utils/helpers"


const AreaNumber = ({ route, path, title, period: delta }) => {

    const [openHelp, setOpenHelp] = useState(false)
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
            <ChartHeader refresh={queryData} title={title} openHelp={() => setOpenHelp(true)} />
            <ChartMessage text="No route chosen" icon="empty-icon"/>
            <ChartHelp chartName={title} open={openHelp} close={() => setOpenHelp(false)}/>
        </ChartCell>
    )
    else if (error) return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title} openHelp={() => setOpenHelp(true)} />
            <ChartMessage text="Data could not be loaded" icon="error-icon"/>
            <ChartHelp chartName={title} open={openHelp} close={() => setOpenHelp(false)}/>
        </ChartCell>
    )
    else if (loading) return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title} openHelp={() => setOpenHelp(true)} />
            <Loader />
            <ChartHelp chartName={title} open={openHelp} close={() => setOpenHelp(false)}/>
        </ChartCell>
    )
    else if (!timeseries.length) return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title} openHelp={() => setOpenHelp(true)} />
            <ChartMessage text="No data points" icon="warning-icon"/>
            <ChartHelp chartName={title} open={openHelp} close={() => setOpenHelp(false)}/>
        </ChartCell>
    )

    const lastValue = timeseries[timeseries.length - 1].value.toFixed(2)
    const period = convertToHour(delta)

    return (
        <ChartCell className="area-number">
            <ChartHeader refresh={queryData} title={title} subtitle={route} openHelp={() => setOpenHelp(true)} />
            <ChartInfo main={lastValue} sub={`Period: ${period}h`}/>
            <AreaChart data={timeseries}/>
            <ChartHelp chartName={title} open={openHelp} close={() => setOpenHelp(false)}/>
        </ChartCell>
    )
}

export default AreaNumber
