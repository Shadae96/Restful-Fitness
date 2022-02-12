const newUserlogin = async () => {
      // If successful redirect to the new user registration page
      document.location.replace('/login');  
  };
  
  document.querySelector('#newUserRegForm').addEventListener('click', newUserlogin);