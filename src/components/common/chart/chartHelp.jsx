import React from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"

import Icon from "@icons/icon"
import { NORMAL_ICON_SIZE } from "@utils/constants"

import "./chart.sass"

const CHART_DESCRIPTION = {
    "trips count": "1 description of chart",
    "avg speed": "2 description of chart",
    "avg distance": "3 description of chart",
    "coordinates": "4 description of chart",
    "transport per type": "5 description of chart",
    "stops per routes": "6 description of chart",
    "transport per agencies": "7 description of chart",
    "transport per routes": "8 description of chart",
    "Галицький": "9 description of chart",
    "Сихівський": "10 description of chart",
    "Личаківський": "11 description of chart",
    "Залізничний": "12 description of chart",
    "Шевченківський": "13 description of chart",
    "Франківський": "14 description of chart",
}

const ChartHelp = ({ open, close, route, helpChartName }) => {


    return (
        <Dialog open={open} onClose={close}>
            <DialogContent className="chart-help">
                <div className="chart-help-header">
                    <div className="chart-help-title">{helpChartName}</div>
                    <div className="chart-help-route">{route}</div>
                </div>
                <div className="chart-help-desc">{CHART_DESCRIPTION[helpChartName]}</div>
                <div className="chart-help-download-button">
                    <Icon name="download-icon" className="chart-help-download-icon" size={NORMAL_ICON_SIZE}/>
                    Download chart
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ChartHelp
