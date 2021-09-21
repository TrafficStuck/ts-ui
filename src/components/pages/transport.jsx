import React, { useState, useEffect } from "react"

import TransportStop from "@components/transport/transportStop"
import TransportItem from "@components/transport/transportItem"
import TransportVehicle from "@components/transport/transportVehicle"
import TransportSearch from "@components/transport/transportSearch"

import request from "@utils/request"
import { STOPS_PATH, STOPS_NEAREST_PATH } from "@utils/constants"


const TransportItemsLoading = () => {
    return (
        new Array(10).fill(null).map((item, index) => <TransportItem key={index} loading={true}/>,
        )
    )
}

const TransportPage = () => {
    const [input, setInput] = useState("")
    const [stops, setStops] = useState([])
    const [selectedStop, setSelectedStop] = useState(null)
    const [vehicles, setVehicles] = useState([])
    const [loading, setLoading] = useState(false)
    const [userLocation, setUserLocation] = useState(null)
    const [error, setError] = useState(false)
    const [showDefaultText, setShowDefaultText] = useState(true)

    useEffect(() => {
        document.title = "traffic stuck: transport"
        navigator.geolocation.getCurrentPosition(
            position => setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }),
            error => setUserLocation(null),
        )
    }, [])

    const onInputChange = (value) => {
        setInput(value)
        setSelectedStop(null)
    }

    const hideSelectedStop = () => {
        setVehicles([])
        setSelectedStop(null)
    }

    const queryArrivals = (stop) => {
        setSelectedStop(stop)
        setLoading(true)

        request.get(`${STOPS_PATH}/${stop._id}/arrivals` )
            .then(response => {
                setVehicles(response.data.result)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }

    const queryStops = (value) => {
        setLoading(true)
        setShowDefaultText(false)
        setVehicles([])

        request.get(STOPS_PATH, { query: value })
            .then(response => {
                const { result } = response.data
                setStops(response.data.result)
                setLoading(false)
                setError(!result.length)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }

    const queryNearestStops = () => {
        setLoading(true)
        setSelectedStop(null)
        setShowDefaultText(false)
        setVehicles([])

        request.get(STOPS_NEAREST_PATH, { ...userLocation })
            .then(response => {
                setStops(response.data.result)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }

    return (
        <div id="transport-page">
            <div className="transport-container">
                <TransportSearch
                    queryNearestStops={queryNearestStops}
                    queryStops={queryStops}
                    onInputChange={onInputChange}
                    input={input}
                    locationEnabled={!!userLocation}
                />
                {!loading && showDefaultText
                    && <div className="transport-default-text">
                        Here you can find a coming bus arrivals to provided stop.
                        In order to do that you may want to start entering the name
                        of stop or stop`s address or you can use "nearest stops"
                        icon which will provide you the nearest stops to your
                        geolocation (but please ensure that you accepted geolocation
                        track in pop-up window). When stops loaded you may want
                        choose wanted stop and we will load for you a coming bus
                        arrivals to chose stop. We hope, you'll be satisfied.
                    </div>
                }
                <div className="transport-result">
                    {selectedStop
                        && <TransportStop
                            selected={true}
                            stop={selectedStop}
                            onClick={hideSelectedStop}
                            userLocation={userLocation}
                        />
                    }
                    {loading && <TransportItemsLoading/>}
                    {!loading && !selectedStop && stops.map(stop => <TransportStop
                        key={stop._id}
                        selected={false}
                        stop={stop}
                        onClick={() => queryArrivals(stop)}
                        userLocation={userLocation}
                    />,
                    )}
                    {!loading && error
                        && <div className="transport-default-text">
                            Couldn't find stops by provided query. Please, try
                            again or later...
                        </div>
                    }
                    {!loading && vehicles.map((vehicle, index) => <TransportVehicle key={index} vehicle={vehicle}/>,
                    )}
                </div>
            </div>
        </div>
    )
}

export default TransportPage
