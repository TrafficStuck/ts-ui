import React, { useEffect, useState } from "react"

import ChartCell from "@components/common/chart/chartCell"
import ChartHeader from "@components/common/chart/chartHeader"
import ChartMessage from "@components/common/chart/chartMessage"
import ScatterChart from "@components/tiles/scatterTime/scatterChart"
import Loader from "@components/common/loader/Loader"
import ChartHelp from "@components/common/chart/chartHelp"

import request from "@utils/request"
import { TIMESERIES_PATH } from "@utils/constants"

import { formatTime } from "@utils/helpers"
import "./scatterTime.sass"


const ScatterTime = ({ route, path, title }) => {

    const [openHelp, setOpenHelp] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [timestamp, setTimestamp] = useState(null)
    const [coordinates, setCoordinates] = useState([])

    useEffect(() => queryData(), [route])

    const queryData = () => {
        if (!route) return

        setLoading(true)
        const endpointPath = `${TIMESERIES_PATH}/${route}/${path}`
        request.get(endpointPath)
            .then(response => {
                const { timestamp, value } = response.data.result
                setLoading(false)
                setError(false)
                setCoordinates(value)
                setTimestamp(formatTime(timestamp))
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }

    if (!route) return (
        <ChartCell className="scatter-time">
            <ChartHeader refresh={queryData} title={title} />
            <ChartMessage text="No route chosen" icon="empty-icon"/>
        </ChartCell>
    )
    else if (error) return (
        <ChartCell className="scatter-time">
            <ChartHeader refresh={queryData} title={title} />
            <ChartMessage text="Data could not be loaded" icon="error-icon"/>
        </ChartCell>
    )
    else if (loading) return (
        <ChartCell className="scatter-time">
            <ChartHeader refresh={queryData} title={title} />
            <Loader/>
        </ChartCell>
    )
    else if (!coordinates.length) return (
        <ChartCell className="scatter-time">
            <ChartHeader refresh={queryData} title={title} />
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp}/>
            <ChartMessage text="No data points" icon="warning-icon"/>
        </ChartCell>
    )

    return (
        <ChartCell className="scatter-time">
            <ChartHeader refresh={queryData} title={title} subtitle={route} openHelp={() => setOpenHelp(true)} />
            <div className="scatter-chart">
                <div className="scatter-chart-time">{timestamp}</div>
                <ScatterChart data={coordinates}/>
            </div>
            <ChartHelp
                chartData={coordinates}
                chartName={title}
                open={openHelp}
                close={() => setOpenHelp(false)}
            />
        </ChartCell>
    )
}

export default ScatterTime
