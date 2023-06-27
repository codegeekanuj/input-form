function printt() {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
  
    // Retrieve the input field values
    var firstName = document.getElementById('first').value;
    var lastName = document.getElementById('second').value;
    var email = document.getElementById('third').value;
    var contact = document.getElementById('fourth').value;
    var password = document.getElementById('fifth').value;
    var message = document.getElementById('sixth').value;
  
    // Print the details in the console
    document.writeln('First Name:  ' + firstName  + '<br>');
    document.writeln('Last Name: ' + lastName + '<br>');
    document.writeln('Email: ' + email + '<br>');
    document.writeln('Contact: ' + contact) + '<br>';
    document.writeln('Password: ' + password + '<br>');
    document.writeln('Message: ' + message + '<br>');
  
    // You can perform further actions with the form data here, such as sending it to a server for processing
  
    // Optionally, you can reset the form fields after submission
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
    document.getElementById('third').value = '';
    document.getElementById('fourth').value = '';
    document.getElementById('fifth').value = '';
    document.getElementById('sixth').value = '';
  }
  
