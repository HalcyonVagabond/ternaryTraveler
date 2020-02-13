


const createObjects = {

    createInterestObject(){
        console.log('not yet')
    }

}


const creatHTML = {

    createPlaceButton (placeObj) {
        return `<button type='button' class='place' id='place-${placeObj.id}'>${placeObj.name}</button>`
    },
    createPlaceInterestContainer (placeObj) {
        return `<article class='interestContainer hidden' id='${placeObj.name}-interestContainer">${placeObj.name}</article>`
    },


    createInterestComponent (interest){
        console.log('not yet')
    }



}

export {creatHTML, createObjects}