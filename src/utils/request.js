import axios from "axios"

// TODO: process env
const host = "https://traffic-stuck-api.herokuapp.com"
const apiVersion = "/api/v1/"


function get(path, params = {}, headers = {}){
    const url = host + apiVersion + path
    return axios.get(url, { params, headers })
}

export default { get }
