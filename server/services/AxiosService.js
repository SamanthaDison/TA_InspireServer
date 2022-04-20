// make sure to npm i axios

import axios from 'axios'

export const api = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/images",
    timeout: 10000
})

class AxiosService {
    async getImage() {
        const image = await api.get('')
        return image
    }
}

export const axiosService = new AxiosService()