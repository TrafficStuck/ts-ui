import {
    GOOGLE_MAP_DIRECTION_URL,
    GOOGLE_MAP_API_VERSION,
    GOOGLE_MAP_WALKING_TRAVEL_MODE
} from "@utils/constants"

const HOUR = 60 * 60

export function convertToHour(seconds) {
    return seconds / HOUR
}

export function formatTime(timestamp) {
    const date = new Date(1000 * timestamp)
    const hours = (date.getHours() < 10 ? "0" : "") + date.getHours()
    const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
    return `${hours}:${minutes}`
}

export function getGoogleMapURL(destLocation, originLocation=null) {
    const googleMapUrl = new URL(GOOGLE_MAP_DIRECTION_URL)

    googleMapUrl.searchParams.set("travelmode", GOOGLE_MAP_WALKING_TRAVEL_MODE)
    googleMapUrl.searchParams.set("api", GOOGLE_MAP_API_VERSION)
    googleMapUrl.searchParams.set("destination", `${destLocation.latitude},${destLocation.longitude}`)
    if (originLocation) {
        googleMapUrl.searchParams.set("origin", `${originLocation.latitude},${originLocation.longitude}`)
    }

    return googleMapUrl.href
}
