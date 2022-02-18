//Open the new  workout submission form
const newWorkoutForm = async () => {
document.location.replace('/workouts');  
};



//Open the view of all past workouts
const workoutHistoryHandler = async () => {
  document.location.replace('/workoutHistory');  
};


//view the community page
const community = async () => {
  document.location.replace('/api/blog');  
};




const logout = async () => {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  
//Event listeners on the nav bar for the main page
  document.querySelector('#newWorkout').addEventListener('click', newWorkoutForm);
  document.querySelector('#logout').addEventListener('click', logout);
  document.querySelector('#myWorkouts').addEventListener('click',workoutHistoryHandler);
  document.querySelector('#community').addEventListener('click',community);

