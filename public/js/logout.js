//Open the new  workout submission form
const newWorkoutForm = async () => {
  const response = await fetch('/api/newWorkoutForm', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    // If successful redirect to new workout form 
    document.location.replace('/workouts');
  } else {
    alert(response.statusText);
  }
};



//Open the view of all past workouts
const workoutHistoryHandler = async () => {
    const response = await fetch('...', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

  if (response.ok) {
    // If successful redirect to workout history
    document.location.replace('/workoutHistory');
  } else {
    alert(response.statusText);
  }
   
};


// Open the view of the blog from the homepage
const blogHandler = async () => {
  const response = await fetch('/api/users/blog', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    // If successful redirect to new workout form 
    document.location.replace('/blog');
  } else {
    alert(response.statusText);
  }
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
  document.querySelector('#myWorkouts').addEventListener('click',workoutHistoryHandler);
  document.querySelector('#community').addEventListener('click', blogHandler)
  document.querySelector('#logout').addEventListener('click', logout);