
const eventListeners = {
    
    placeButtonEventListener(){
        const placeButtonContainer = document.getElementById('placeButtonContainer')

        placeButtonContainer.addEventListener('click', (event) => {

            if (event.target.id.startsWith('place')){
                const placeId = event.target.id.split('-')[1]
                const interestContainer = document.getElementById(`interestContainer-${placeId}`)

                interestContainer.classList.toggle('hidden')
            }
        });
    }

}

export default eventListeners