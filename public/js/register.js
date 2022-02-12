const newUserForm = async () => {
      // If successful redirect to the new user registration page
      document.location.replace('/register');  
  };
  
  document.querySelector('#new-User').addEventListener('click', newUserForm);