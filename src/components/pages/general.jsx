import React from "react"

import ChartsContainer from "@components/common/chart/chartsContainer"
import BarNumber from "@components/tiles/barNumber/barNumber"
import DonutNumber from "@components/tiles/donutNumber/donutNumber"


const GeneralPage = () => {

    return (
        <div id="general-page">
            <ChartsContainer>
                <DonutNumber title="transport per type" path="transport_per_type"/>
                <BarNumber title="stops per routes" path="stops_per_routes"/>
                <DonutNumber title="transport per agencies" path="transport_per_agencies"/>
                <BarNumber title="transport per routes" path="transport_per_routes"/>
            </ChartsContainer>
        </div>
    )
}

export default GeneralPage
