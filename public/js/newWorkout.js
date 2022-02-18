const form = document.getElementById('#workoutForm');
const messageContainer = document.querySelector('.workout-message-container');
const message = document.getElementById('#workout-message');

// Setting the form in default to invalid
let isValid = false;

function validateForm(){
    // using contraint API
    isValid = form.checkValidity();

    //Style main message for an error
    if(!isValid){
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    
    return;

    }
    //if form is valid
    if (isValid){
        message.textContent = 'Congrats! New workout added';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}



const addNewWorkout = async (e) => {
     e.preventDefault();

     validateForm();

     if(isValid){

     const Workouts = {
        user_name: form.user_name.value,
        title: form.title.value,
        duration: form.duration.value,
        intensity: form.intensity.value,
        outcome: form.outcome.value,
    }

    if (Workouts){
        const response = await fetch('/api/newWorkout',{
            method:'POST',
            body: JSON.stringify(Workouts),
            headers: {'Content-Type' : 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert ('Failed to add new workout. Please try again');
        }
    }
}};



document.querySelector('form').addEventListener('click', addNewWorkout);