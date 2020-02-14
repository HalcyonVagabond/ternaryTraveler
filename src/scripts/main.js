import addToDOM from "./addToDOM.js"
import eventListeners from "./eventListeners.js"

// adding buttons and interest containers to DOM
addToDOM.addPlaceButtonsAndContainers()
addToDOM.addInterestsToContainers()

//  adding event listeners on place buttons
eventListeners.placeButtonEventListener()
eventListeners.editCostEventListener()
eventListeners.saveCostEventListener()
eventListeners.createReviewEventListener()
eventListeners.saveReview()
eventListeners.editReviewEventListener()