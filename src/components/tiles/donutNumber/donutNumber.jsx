import React, { useEffect, useState } from "react"

import ChartHeader from "@components/common/chart/chartHeader"
import ChartInfo from "@components/common/chart/chartInfo"
import ChartCell from "@components/common/chart/chartCell"
import PieChart from "@components/tiles/donutNumber/pieChart"
import ChartMessage from "@components/common/chart/chartMessage"
import Loader from "@components/common/loader/Loader"

import request from "@utils/request"
import { STATIC_PATH } from "@utils/constants"

import "./donutNumber.sass"


const DonutNumber = ({ path, title, openHelp }) => {

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
        <ChartCell className="donut-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp} />
            <ChartMessage text="Data could not be loaded" icon="error-icon"/>
        </ChartCell>
    )
    else if (loading) return (
        <ChartCell className="donut-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp} />
            <Loader/>
        </ChartCell>
    )
    else if (!data.length) return (
        <ChartCell className="donut-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp} />
            <ChartMessage text="No data points" icon="warning-icon"/>
        </ChartCell>
    )

    const { id, value } = data[activeIndex]
    return (
        <ChartCell className="donut-number">
            <ChartHeader refresh={queryData} title={title} openHelp={openHelp} />
            <div className="pie-chart">
                <ChartInfo main={value} sub={id} />
                <PieChart
                    data={data}
                    activeIndex={activeIndex}
                    changeActive={(pie, index) => setActiveIndex(index)}
                />
            </div>
        </ChartCell>
    )
}

export default DonutNumber
