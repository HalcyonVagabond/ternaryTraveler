import dbAPI from "./dbAPI.js"
import {creatHTML, createObjects} from "./componentCreator.js"


const addToDOM = {

    addPlaceButtonsAndContainers() {
        const buttonContainer = document.getElementById('placeButtonContainer')
        const interestContainer = document.getElementById('interestContainer')

        dbAPI.getPlaces()
            .then(places => {
                places.forEach(place => {
                    buttonContainer.innerHTML += creatHTML.createPlaceButton(place)
                    interestContainer.innerHTML += creatHTML.createPlaceInterestContainer(place)


                });
            })

    }

}

export default addToDOM