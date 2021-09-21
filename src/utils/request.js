import axios from "axios"

const host = "https://traffic-stuck-api.herokuapp.com"
// const host = "http://localhost:5555"
const apiVersion = "/api/v1/"


function get(path, params = {}, headers = {}){
    const url = host + apiVersion + path
    return axios.get(url, { params, headers })
}

export default { get }
