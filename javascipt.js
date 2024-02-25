function validatePassword() {
    var password = document.getElementById("signupPassword").value;
    var passwordPattern = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    const errorMessage = document.getElementById('signupErrorMessage');
  
    if (!passwordPattern.test(password)) {
      errorMessage.innerHTML = "<ul><li>Password must be at least 8 characters long</li><li>At least one letter</li><li>At least one number</li><li>At least one special character</li></ul>";
      errorMessage.style.display = 'block';
      return false;
    }
  
    return true;
  }
  
  
  function signup(event) {
    event.preventDefault();
      var firstName = document.querySelector('.signup input[name="txt"]:nth-of-type(1)').value;
      var lastName = document.querySelector('.signup input[name="txt"]:nth-of-type(2)').value;
      var email = document.querySelector('.signup input[name="email"]').value;
      var password = document.querySelector('.signup input[name="pswd"]').value;
  
      // For testing purposes, check if the first name is not empty
      if (firstName.trim() !== '') {
          // Redirect to the welcome page on successful signup
          window.location.href = 'welcome.html';
      } else {
          alert('Invalid signup information. Please try again.');
      }
  }
  function login(event) {
    event.preventDefault();
    var email = document.querySelector('.login input[name="email"]').value;
    var password = document.querySelector('.login input[name="pswd"]').value;
  
    // For testing purposes, check if the email is not empty
    if (email.trim() !== '') {
        // Redirect to the welcome page on successful login
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid login credentials. Please try again.');
    }
    console.log('Email:', email);
    console.log('Password:', password);
  }