
const eventListeners = {
    
    placeButtonEventListener(){
        const placeButtonContainer = document.getElementById('placeButtonContainer')

        placeButtonContainer.addEventListener('click', (event) => {
            
            if (event.target.id.startsWith('place')){
                console.log(event.target.id)
            }
        });
    }

}

export default eventListeners