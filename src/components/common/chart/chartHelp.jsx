import React from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"

import Icon from "@icons/icon"
import { CHART_DESCRIPTIONS } from "@utils/chart_descriptions"
import { NORMAL_ICON_SIZE, CSV_FORMAT } from "@utils/constants"
import { convertCSV, exportFile } from "@utils/helpers"

import "./chart.sass"


const ChartHelp = ({ open, close, route, chartName, chartData }) => {

    const exportChartData = () => {
        const csv = convertCSV(chartData)
        const csvFilename = `${chartName.replace(/ /g, "_").toLowerCase()}.csv`
        exportFile(csv, csvFilename, CSV_FORMAT)
    }
    return (
        <Dialog open={open} onClose={close}>
            <DialogContent className="chart-help">
                <div className="chart-help-header">
                    <div className="chart-help-header-title">{chartName}</div>
                    <div className="chart-help-header-route">{route}</div>
                </div>
                <div className="chart-help-desc">{CHART_DESCRIPTIONS[chartName]}</div>
                <div className="chart-help-download-button" onClick={exportChartData}>
                    <Icon name="download-icon" className="chart-help-download-icon" size={NORMAL_ICON_SIZE}/>
                    Download chart
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ChartHelp
