const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(email && password){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers:{'Content-Type': 'application/json'},
        });

        if(response.ok){
            document.location.replace('/');
        } else {
            alert('Failed to log in')
        }
    }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


  // New user button

  const newUserForm = async () => {
    // If successful redirect to the new user registration page
    document.location.replace('/register');  
};

document.querySelector('#new-User').addEventListener('click', newUserForm);

  
