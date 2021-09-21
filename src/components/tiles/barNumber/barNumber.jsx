import React, { useEffect, useState } from "react"

import ChartHeader from "@components/common/chart/chartHeader"
import ChartMessage from "@components/common/chart/chartMessage"
import ChartCell from "@components/common/chart/chartCell"
import ChartInfo from "@components/common/chart/chartInfo"
import BarChart from "@components/tiles/barNumber/barChart"
import Loader from "@components/common/loader/Loader"

import request from "@utils/request"
import { STATIC_PATH } from "@utils/constants"

import "./barNumber.sass"


const BarNumber = ({ path, title, openHelp }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => queryData(), [])

    const queryData = () => {
        setLoading(true)

        const endpointPath = `${STATIC_PATH}/${path}`
        request.get(endpointPath)
            .then(response => {
                setLoading(false)
                setError(false)
                setData(response.data.result)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }

    if (error) return (
        <ChartCell className="bar-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp} />
            <ChartMessage text="Data could not be loaded" icon="error-icon"/>
        </ChartCell>
    )
    else if (loading) return (
        <ChartCell className="bar-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp} />
            <Loader/>
        </ChartCell>
    )
    else if (!data.length) return (
        <ChartCell className="bar-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp} />
            <ChartMessage text="No data points" icon="warning-icon"/>
        </ChartCell>
    )

    const { id, value } = data[activeIndex]
    return (
        <ChartCell className="bar-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp} />
            <ChartInfo main={value} sub={`Transport: ${id}`}/>
            <div className="bar-chart">
                <BarChart
                    data={data}
                    activeIndex={activeIndex}
                    changeActive={(bar, index) => setActiveIndex(index)}
                />
            </div>
        </ChartCell>
    )
}

export default BarNumber
