import React from "react"
import { Link } from "react-router-dom"

import TransportItem from "@components/transport/transportItem"
import Icon from "@icons/icon"
import { NORMAL_ICON_SIZE } from "@utils/constants"
import { getGoogleMapURL } from "@utils/helpers"


import "./transport.sass"


const TransportStop = ({ stop, selected, onClick, userLocation }) => {
    const stopLocation = { latitude: stop.coordinates[0], longitude: stop.coordinates[1] }
    const googleMapURL = getGoogleMapURL(stopLocation, userLocation)
    return (
        <TransportItem loading={false}>
            {selected && <div className="transport-stop-line"/>}
            <div className="transport-stop" onClick={onClick}>
                <div className="transport-stop-name">{stop["stop_name"]}</div>
                <div className="transport-stop-desc">{stop["stop_desc"]}</div>
            </div>
            <div className="transport-stop-location">
                <Link to={{ pathname: googleMapURL }} target="_blank">
                    <Icon
                        name="map-icon"
                        className={`transport-stop-location-${selected ? "yellow" : "grey"}`}
                        size={NORMAL_ICON_SIZE}
                    />
                </Link>
            </div>

        </TransportItem>
    )
}

export default TransportStop
