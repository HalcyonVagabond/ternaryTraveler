import dbAPI from "./dbAPI.js";
import addToDOM from "./addToDOM.js";
import {createHTML, createObjects} from "./componentCreator.js"

const eventListeners = {
    
    placeButtonEventListener() {
        const placeButtonContainer = document.getElementById('placeButtonContainer')

        placeButtonContainer.addEventListener('click', (event) => {

            if (event.target.id.startsWith('place')){
                const placeId = event.target.id.split('-')[1];
                const interestContainer = document.getElementById(`interestContainer-${placeId}`);

                interestContainer.classList.toggle('hidden');
            }
        });
    },

    editCostEventListener() {
        const interestContainer = document.getElementById('interestContainer')

        interestContainer.addEventListener('dblclick', (event) => {
                
                if (event.target.id.startsWith('cost')) {
                    const interestId = event.target.id.split('-')[1]

                    dbAPI.fetchInterest(interestId)
                        .then(interest => {
                            addToDOM.addEditCostComponent(interest.id, interest.cost)
                        })
                };
        });
    },

    saveCostEventListener() {
        const interestContainer = document.getElementById('interestContainer')

        interestContainer.addEventListener('keyup', (event) => {
            
            if (event.target.id.startsWith('edit') && event.key === "Enter") {

                console.log(event)
                const interestId = event.target.id.split('-')[1]
                const costAmount = document.getElementById(`editCost-${interestId}`).value
                const costObj = createObjects.createCostObject(costAmount)
                
                // fetching interest to get placeId to clear container, yes it is convoluted.
                dbAPI.fetchInterest(interestId)
                    .then(interest => {
                        const placeId = interest.placeId

                        dbAPI.patchCost(costObj, interestId)
                            .then(() => {
                                addToDOM.resetContainer(placeId)
                            })
                            .then(addToDOM.addInterestsToContainers)


                })
                
            };
        });
    }
     

    

}

export default eventListeners