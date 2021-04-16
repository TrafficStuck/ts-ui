import React, { useEffect } from "react"

import ChartsContainer from "@components/common/chartsContainer"
import DonutHistory from "@components/tiles/donutHistory/donutHistory"


const RegionsPage = () => {
    useEffect(() => {
        document.title = "traffic stuck: regions"
    })

    return (
        <div id="regions-page">
            <ChartsContainer>
                <DonutHistory title="Галицький"/>
                <DonutHistory title="Сихівський"/>
                <DonutHistory title="Личаківський"/>
                <DonutHistory title="Залізничний"/>
                <DonutHistory title="Шевченківський"/>
                <DonutHistory title="Франківський"/>
            </ChartsContainer>
        </div>
    )
}

export default RegionsPage
