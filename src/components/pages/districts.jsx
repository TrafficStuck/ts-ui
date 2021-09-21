import React, { useEffect, useState } from "react"

import ChartsContainer from "@components/common/chart/chartsContainer"
import DonutHistory from "@components/tiles/donutHistory/donutHistory"
import ChartHelp from "@components/common/chart/chartHelp"


const DistrictsPage = () => {

    const [openHelp, setOpenHelp] = useState(false)
    const [helpChartName, setHelpChartName] = useState("")

    useEffect(() => {
        document.title = "traffic stuck: regions"
    })

    const openHelpPopup = (helpChartName) => {
        setOpenHelp(true)
        setHelpChartName(helpChartName)
    }

    return (
        <div id="districts-page">
            <ChartsContainer>
                <DonutHistory title="Галицький" openHelp={() => openHelpPopup("Галицький")} />
                <DonutHistory title="Сихівський" openHelp={() => openHelpPopup("Сихівський")} />
                <DonutHistory title="Личаківський" openHelp={() => openHelpPopup("Личаківський")} />
                <DonutHistory title="Залізничний" openHelp={() => openHelpPopup("Залізничний")} />
                <DonutHistory title="Шевченківський" openHelp={() => openHelpPopup("Шевченківський")} />
                <DonutHistory title="Франківський" openHelp={() => openHelpPopup("Франківський")} />
            </ChartsContainer>
            <ChartHelp
                open={openHelp}
                helpChartName={helpChartName}
                close={() => setOpenHelp(false)}
            />
        </div>
    )
}

export default DistrictsPage
