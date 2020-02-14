import dbAPI from "./dbAPI.js";
import addToDOM from "./addToDOM.js";
import { createHTML, createObjects } from "./componentCreator.js"

const eventListeners = {

    postNewInterestEventListener() {
        const formContainer = document.getElementById('formContainer')

        formContainer.addEventListener('click', (event) => {
            if (event.target.id.startsWith('submitInterest')) {
                const interestName = document.getElementById('interestNameField')
                const interestDescription = document.getElementById('interestDescription')
                const interestCost = document.getElementById('addCost')
                const interestReview = document.getElementById('interestReview')
                const interestPlaceId = document.getElementById('selectPlace')

                // creating entry object
                const interestObject = createObjects.interestObjectFactory(interestName.value, interestDescription.value, interestCost.value, interestReview.value, interestPlaceId.value);
                // posting entryObject to database
                if (interestName == "" || interestDescription == "" || interestCost == "" || interestPlaceId == "") {
                    alert('Please fill out all inputs before submitting!')
                } else {
                    dbAPI.postInterest(interestObject)
                        .then(() => {
                            addToDOM.resetContainer(interestPlaceId.value)
                        })
                        .then(() => {
                            addToDOM.updatePlaceInterestContainer(interestPlaceId.value)

                            interestName.value = ""
                            interestDescription.value = ""
                            interestCost.value = ""
                            interestReview.value = ""
                            interestPlaceId.value = ""
                        })

                }
            }
        });
    },

    placeButtonEventListener() {
        const placeButtonContainer = document.getElementById('placeButtonContainer')

        placeButtonContainer.addEventListener('click', (event) => {

            if (event.target.id.startsWith('place')) {
                const placeId = event.target.id.split('-')[1];
                const interestContainer = document.getElementById(`interestContainer-${placeId}`);
                const interestHeader = document.getElementById(`interestHeader-${placeId}`)

                interestContainer.classList.toggle('hidden');
                interestHeader.classList.toggle('hidden');
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

                const interestId = event.target.id.split('-')[1]
                const costAmount = document.getElementById(`editCost-${interestId}`).value
                const costObj = createObjects.createCostObject(costAmount)

                // fetching interest to get placeId to clear container, yes it is convoluted.

                dbAPI.patchCost(costObj, interestId)
                    .then(interest => {
                        addToDOM.resetContainer(interest.placeId)
                        return interest
                    })
                    .then(interest => {
                        addToDOM.updatePlaceInterestContainer(interest.placeId)
                    })

            };
        });
    },

    createReviewEventListener() {
        const interestContainer = document.getElementById('interestContainer')

        interestContainer.addEventListener('click', (event) => {
            if (event.target.id.startsWith('createReview')) {

                const interestId = event.target.id.split('-')[1]
                const reviewContainer = document.getElementById(`reviewContainer-${interestId}`)

                reviewContainer.innerHTML = createHTML.createReviewEntryComponent(interestId)
            }
        })
    },

    saveReview() {
        const interestContainer = document.getElementById('interestContainer')

        interestContainer.addEventListener('click', (event) => {
            if (event.target.id.startsWith('saveReview')) {

                const interestId = event.target.id.split('-')[1]
                const review = document.getElementById(`review-${interestId}`).value
                const reviewObj = createObjects.createReviewObject(review)
                dbAPI.patchReview(reviewObj, interestId)
                    .then(interest => {
                        addToDOM.resetContainer(interest.placeId)
                        return interest
                    })
                    .then(interest => {
                        addToDOM.updatePlaceInterestContainer(interest.placeId)
                    })
            }
        })

    },

    editReviewEventListener() {
        const interestContainer = document.getElementById('interestContainer')


        interestContainer.addEventListener('click', (event) => {
            if (event.target.id.startsWith('editReview')) {
                const interestId = event.target.id.split('-')[1]
                const reviewContainer = document.getElementById(`reviewContainer-${interestId}`)

                dbAPI.fetchInterest(interestId)
                    .then(interest => {
                        reviewContainer.innerHTML = createHTML.createReviewEntryComponent(interest.id)

                        const reviewTextArea = document.getElementById(`review-${interest.id}`)
                        reviewTextArea.value = interest.review
                    })


            }
        })
    },

    deleteInterestButtonEventListener() {
        const interestContainer = document.getElementById('interestContainer')


        interestContainer.addEventListener('click', (event) => {
            if (event.target.id.startsWith('deleteInterest')) {
                const interestId = event.target.id.split('-')[1]
                const reviewContainer = document.getElementById(`reviewContainer-${interestId}`)

                if (confirm("Are you sure you want to delete this interest?")) {
                    dbAPI.fetchInterest(interestId)
                        .then(interest => {
                            const placeId = interest.placeId

                            dbAPI.deleteInterest(interestId)
                                .then(() => {
                                    addToDOM.resetContainer(placeId)
                                })
                                .then(() => {
                                    addToDOM.updatePlaceInterestContainer(placeId)
                                })
                        })
                };

            }
        })
    }


}

export default eventListeners