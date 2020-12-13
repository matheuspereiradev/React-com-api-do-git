import axios from 'axios'

const gitApi = axios.create({
    baseURL:'https://api.github.com/'
})

export default gitApi;