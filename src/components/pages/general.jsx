import React, { useState } from "react"

import ChartsContainer from "@components/common/chart/chartsContainer"
import BarNumber from "@components/tiles/barNumber/barNumber"
import DonutNumber from "@components/tiles/donutNumber/donutNumber"
import ChartHelp from "@components/common/chart/chartHelp"


const GeneralPage = () => {

    const [openHelp, setOpenHelp] = useState(false)
    const [helpChartName, setHelpChartName] = useState("")

    const openHelpPopup = (helpChartName) => {
        setOpenHelp(true)
        setHelpChartName(helpChartName)
    }

    return (
        <div id="general-page">
            <ChartsContainer>
                <DonutNumber
                    title="transport per type"
                    path="transport_per_type"
                    openHelp={() => openHelpPopup("transport per type")}
                />
                <BarNumber
                    title="stops per routes"
                    path="stops_per_routes"
                    openHelp={() => openHelpPopup("stops per routes")}
                />
                <DonutNumber
                    title="transport per agencies"
                    path="transport_per_agencies"
                    openHelp={() => openHelpPopup("transport per agencies")}
                />
                <BarNumber
                    title="transport per routes"
                    path="transport_per_routes"
                    openHelp={() => openHelpPopup("transport per routes")}
                />
            </ChartsContainer>
            <ChartHelp
                open={openHelp}
                helpChartName={helpChartName}
                close={() => setOpenHelp(false)}
            />
        </div>
    )
}

export default GeneralPage
