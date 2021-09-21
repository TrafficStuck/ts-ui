import React from "react"

import TransportItem from "@components/transport/transportItem"
import Icon from "@icons/icon"
import { NORMAL_ICON_SIZE } from "@utils/constants"

import "./transport.sass"


const VEHICLE_ICONS = {
    "Тр": <Icon name="trolleybus-icon" viewBox="0 0 22 31" size={NORMAL_ICON_SIZE}/>,
    "Т": <Icon name="tramway-icon" size={NORMAL_ICON_SIZE}/>,
    "А": <Icon name="transport-icon" size={NORMAL_ICON_SIZE}/>,
}


const TransportVehicle = ({ vehicle }) => {
    const arrival_time = vehicle["arrival_time"].slice(0, 5)
    const vehicle_type = vehicle["route_long_name"].replace(/[0-9]/g, "")
    const vehicle_icon = VEHICLE_ICONS[vehicle_type] || VEHICLE_ICONS["transport-icon"]

    return (
        <TransportItem loading={false}>
            <div className="transport-vehicle-type-icon">
                {vehicle_icon}
            </div>
            <div className="transport-vehicle-line"/>
            <div className="transport-vehicle">
                <div className="transport-vehicle-name">{vehicle["route_short_name"]}</div>
                <div className="transport-vehicle-route">{vehicle["route_long_name"]}</div>
            </div>
            <div className="transport-vehicle-arrival-time">{arrival_time}</div>

        </TransportItem>
    )
}

export default TransportVehicle
