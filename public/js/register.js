const newUserlogin = async () => {
      // If successful redirect to the new user registration page
      document.location.replace('/login');  
  };
  
  document.querySelector('#newUserRegForm').addEventListener('click',newUserlogin);

//  Event listener
// grab all the values
//package all values and send to POST to database
// make sure to match verbs and location