import React, { useEffect } from "react"

import ChartsContainer from "@components/common/chartsContainer"
import BarNumber from "@components/tiles/barNumber/barNumber"
import DonutNumber from "@components/tiles/donutNumber/donutNumber"


const TransportPage = () => {
    useEffect(() => {
        document.title = "traffic stuck: transport"
    })

    return (
        <div id="transport-page">
            <ChartsContainer>
                <DonutNumber
                    title="transport per type"
                    path="transport_per_type"
                />
                <BarNumber
                    title="stops per routes"
                    path="stops_per_routes"
                />
                <DonutNumber
                    title="transport per agencies"
                    path="transport_per_agencies"
                />
                <BarNumber
                    title="transport per routes"
                    path="transport_per_routes"
                />
            </ChartsContainer>
        </div>
    )
}

export default TransportPage
