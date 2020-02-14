const baseURL = "http://localhost:8088"


const dbAPI = {

    getPlaces() {
        return fetch(`${baseURL}/places`).then(resp => resp.json())
    },

    getInterests() {
        return fetch(`${baseURL}/interests?_expand=place`).then(resp => resp.json())
    },

    fetchInterest(id) {
        return fetch(`${baseURL}/interests/${id}?_expand=place`).then(resp => resp.json())
    },

    patchCost(costObj, interestId) {
        return fetch(`${baseURL}/interests/${interestId}?_expand=place`, {
                        method: "PATCH",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(costObj)
                }).then(r=>r.json)
            },
        

}

export default dbAPI