import React, { useState } from "react"

import SearchDialog from "@components/search/search"
import ChartsContainer from "@components/common/chartsContainer"
import AreaNumber from "@components/tiles/areaNumber/areaNumber"
import ScatterTime from "@components/tiles/scatterTime/scatterTime"

import Icon from "@icons/icon"
import { BIG_ICON_SIZE, ROUTE_KEY, PERIOD_KEY, HOUR_SECONDS } from "@utils/constants"


const TrafficPage = () => {

    const [searchOpen, setSearchOpen] = useState(false)
    const [route, setRoute] = useState(localStorage.getItem(ROUTE_KEY))
    const [period, setPeriod] = useState(localStorage.getItem(PERIOD_KEY) || 1)

    const submit = (route, period) => {
        setRoute(route)
        setPeriod(period)
        setSearchOpen(false)
    }

    const periodSeconds = parseInt(period) * HOUR_SECONDS
    return (
        <div id="traffic-page">
            <ChartsContainer>
                <AreaNumber
                    period={periodSeconds}
                    route={route}
                    path="trips_count"
                    title="trips count"
                />
                <AreaNumber
                    period={periodSeconds}
                    route={route}
                    path="avg_speed"
                    title="avg speed"
                />
                <AreaNumber
                    period={periodSeconds}
                    route={route}
                    path="avg_distance"
                    title="avg distance"
                />
                <ScatterTime
                    period={periodSeconds}
                    route={route}
                    path="coordinates"
                    title="coordinates"
                />
            </ChartsContainer>
            <div className="search-button" onClick={() => setSearchOpen(true)}>
                <Icon name="search-icon" className="search-icon" size={BIG_ICON_SIZE}/>
            </div>
            <SearchDialog
                open={searchOpen}
                close={() => setSearchOpen(false)}
                submit={submit}
            />
        </div>
    )
}

export default TrafficPage
