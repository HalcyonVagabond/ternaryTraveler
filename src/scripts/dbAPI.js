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
    
    getInterestsByPlace(placeId) {
        return fetch(`${baseURL}/interests/?placeId=${placeId}&_expand=place`).then(resp => resp.json())
    },

    postInterest(newInterestObj){
        return fetch(`${baseURL}/interests`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newInterestObj)
        }).then(r=>r.json())

    },

    patchCost(costObj, interestId) {
        return fetch(`${baseURL}/interests/${interestId}?_expand=place`, {
                        method: "PATCH",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(costObj)
                }).then(r=>r.json())
     },

     patchReview(reviewObj, interestId) {
        return fetch(`${baseURL}/interests/${interestId}?_expand=place`, {
                        method: "PATCH",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(reviewObj)
                }).then(resp => resp.json())
     },

     deleteInterest(interestId) {
        return fetch(`${baseURL}/interests/${interestId}`, {
            method: "DELETE"
        }).then(resp => resp.json())
    }
        

}

export default dbAPI