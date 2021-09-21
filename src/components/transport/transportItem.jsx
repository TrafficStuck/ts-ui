import React from "react"

import Loader from "@components/common/loader/Loader"

import "./transport.sass"


const TransportItem = ({ children, loading }) => {
    return (
        <div className="transport-item">
            {children}
            {loading && <Loader/>}
        </div>
    )
}

export default TransportItem
