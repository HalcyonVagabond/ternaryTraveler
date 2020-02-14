


const createObjects = {

    createInterestObject(){
        console.log('not yet')
    },

    createCostObject(amount){
        return {'cost': amount}
    }

}


const createHTML = {

    createPlaceButton (placeObj) {
        return `<button type='button' class='place' id='place-${placeObj.id}'>${placeObj.name}</button>`
    },
    createPlaceInterestContainer (placeObj) {
        return `<div class='interestContainer hidden' id='interestContainer-${placeObj.id}'></div>`
    },


    createInterestComponent (interest){
        return `
            <article class='interest' id='interest-${interest.id}'>
                <h1>${interest.name}</h1>
                <h2>${interest.place.name}</h2>
                <p>${interest.description}</p>

                <div class='costContainer' id='cost-${interest.id}'>Cost: $${interest.cost}</div>

                <div class='reviewContainer' id='description-${interest.id}'>
                    
                    ${this.interestReviewOption(interest)}

                </div>

            </article>
        `
    }, 
    
    interestReviewOption(interest) {
        if (interest.review === "") {
            return `<button type='button' class='createReview-button' id='createReview-${interest.id}'>Create Review</button>`
        } else {
            return `
                <p>${interest.review}</p>
                <button type='button' class='editReview-button' id='editReview-${interest.id}'>Edit Review</button>
            `
        }
    },

    createEditCostComponent(interestId, interestCost) {
        return `<input type='number' class='editCost' id="editCost-${interestId}" step=0.01 placeholder=${interestCost}>`
    },

    createReviewEntryComponent(interestId) {
        return `
        <textarea id=review-${interestId} placeholder='Enter Review Here'>
        <button type='button' class= 'saveReview' id='saveReviewButton-${interestId}>Save Review</button>
        `
    }



}

export {createHTML, createObjects}