


const createObjects = {

    createInterestObject(){
        console.log('not yet')
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
                <div class='cost' id='cost-${interest.id}'>
                    <p>Cost: $${interest.cost}</p>
                </div>

            </article>
        `
    }



}

export {createHTML, createObjects}