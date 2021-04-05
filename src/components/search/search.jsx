import React, { useState, useEffect } from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"

import SearchPeriod from "@components/search/searchPeriod"
import SearchTransport from "@components/search/searchTransport"
import SearchError from "@components/search/searchError"
import Icon from "@icons/icon"
import { TIMESERIES_PATH, ROUTE_KEY, PERIOD_KEY } from "@utils/constants"
import request from "@utils/request"
import "./search.sass"


const SearchDialog = ({ submit, open, close }) => {
    const [currentRoute, setCurrentRoute] = useState(localStorage.getItem(ROUTE_KEY))
    const [period, setPeriod] = useState(localStorage.getItem(PERIOD_KEY) || 1)
    const [data, setData] = useState([])

    const setRouteName = (currentRoute) => {
        setCurrentRoute(currentRoute)

        localStorage.setItem(ROUTE_KEY, currentRoute)
        localStorage.setItem(PERIOD_KEY, period)

        submit(currentRoute, period)
    }

    useEffect(() => queryData(), [])

    const queryData = () => {
        const endpointPath = `${TIMESERIES_PATH}/routes`
        request.get(endpointPath)
            .then(response => {
                setData(response.data.result)
            })
    }

    if (!data.length) return (
        <Dialog open={open} onClose={close}>
            <DialogContent className="search-dialog">
                <div onClick={close}>
                    <Icon name="close-icon" className="close-icon"/>
                </div>
                <SearchError />
            </DialogContent>
        </Dialog>
    )
    return (
        <Dialog open={open} onClose={close}>
            <DialogContent className="search-dialog">
                <SearchPeriod period={period} setPeriod={setPeriod}/>
                <div onClick={close}>
                    <Icon name="close-icon" className="close-icon"/>
                </div>
                <SearchTransport
                    transports={data}
                    currentRoute={currentRoute}
                    setRouteName={setRouteName}
                />
            </DialogContent>
        </Dialog>
    )
}

export default SearchDialog
