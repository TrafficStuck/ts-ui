import React from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"

import Icon from "@icons/icon"
import { CHART_DESCRIPTIONS } from "@utils/chart_descriptions"
import { NORMAL_ICON_SIZE } from "@utils/constants"

import "./chart.sass"


const ChartHelp = ({ open, close, route, chartName }) => {
    return (
        <Dialog open={open} onClose={close}>
            <DialogContent className="chart-help">
                <div className="chart-help-header">
                    <div className="chart-help-header-title">{chartName}</div>
                    <div className="chart-help-header-route">{route}</div>
                </div>
                <div className="chart-help-desc">{CHART_DESCRIPTIONS[chartName]}</div>
                <div className="chart-help-download-button">
                    <Icon name="download-icon" className="chart-help-download-icon" size={NORMAL_ICON_SIZE}/>
                    Download chart
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ChartHelp
