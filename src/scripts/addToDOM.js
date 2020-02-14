import dbAPI from "./dbAPI.js"
import {createHTML, createObjects} from "./componentCreator.js"


const addToDOM = {

    addPlaceButtonsAndContainers() {
        const buttonContainer = document.getElementById('placeButtonContainer')
        const interestContainer = document.getElementById('interestContainer')

        dbAPI.getPlaces()
            .then(places => {
                places.forEach(place => {
                    buttonContainer.innerHTML += createHTML.createPlaceButton(place);
                    
                    interestContainer.innerHTML += createHTML.createPlaceInterestContainer(place);


                });
            })

    },

    addInterestsToContainers() {

        dbAPI.getInterests().then(interests => {
            
            interests.forEach(interest => {
                const interestContainer = document.getElementById(`interestContainer-${interest.placeId}`)

                interestContainer.innerHTML += createHTML.createInterestComponent(interest)
            })
        })
    },

    updatePlaceInterestContainer(placeId) {
        dbAPI.getInterestsByPlace(placeId)
        .then(interests => {

            const placeInterestsContainer = document.getElementById(`interestContainer-${placeId}`)
            
            interests.forEach(interest => { 
                placeInterestsContainer.innerHTML += createHTML.createInterestComponent(interest)
            })
        })
    },

    addEditCostComponent(interestId, interestCost) {
        const costContainer = document.getElementById(`cost-${interestId}`)

        costContainer.innerHTML = createHTML.createEditCostComponent(interestId, interestCost)
    },

    resetContainer(placeId) {
        const interestContainer = document.getElementById(`interestContainer-${placeId}`)
            interestContainer.innerHTML = ""
    }

}

export default addToDOM