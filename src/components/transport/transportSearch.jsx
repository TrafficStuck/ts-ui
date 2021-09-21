import React from "react"

import Icon from "@icons/icon"

import "./transport.sass"
import { DebounceInput } from "react-debounce-input"
import { NORMAL_ICON_SIZE } from "@utils/constants"


const TransportSearch = ({ input, onInputChange, queryStops, queryNearestStops, locationEnabled }) => {
    return (
        <div className="transport-search">
            <div
                className={`
                    transport-search-location 
                    transport-search-location-${locationEnabled ? "enabled" : "disabled"}
                `}
                onClick={queryNearestStops}
            >
                <Icon
                    name="location-icon"
                    viewBox="0 0 16 22"
                    size={NORMAL_ICON_SIZE}
                />
            </div>
            <div className="transport-search-input">
                <DebounceInput
                    minLength={3}
                    debounceTimeout={300}
                    onChange={event => queryStops(event.target.value)}
                    onKeyDown={event => onInputChange(event.target.value)}
                    value={input}
                    placeholder="Enter a stop name.."
                />
            </div>
        </div>
    )
}

export default TransportSearch
