
// const newUserForm = async () => {
//     // Make a POST request to destroy the session on the back end
//     const response = await fetch('/api/users/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       // If successful redirect to the new user registration page
//       document.location.replace('/register');
//     } else {
//       alert(response.statusText);
//     }
//   };
  
//   document.querySelector('#registration-form').addEventListener('click', newUserForm);