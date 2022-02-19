//Redirect users to the home page
const goHome = async () => {
    document.location.replace('/');  
  };

document.getElementById('home').addEventListener('click', goHome);

