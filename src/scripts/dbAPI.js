const baseURL = "http://localhost:8088"


const dbAPI = {

    getPlaces() {
        return fetch(`${baseURL}/places`).then(resp => resp.json())
    },

    getInterests() {
        return fetch(`${baseURL}/interests?_expand=place`).then(resp => resp.json())
    }

}

export default dbAPI