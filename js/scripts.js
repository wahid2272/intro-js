var registeredUsers = [];

function validateForm(e){
    e.preventDefault();
    console.log('validating....');

    console.log('user name: ' + validateUsername());
    console.log('email: ' + validateEmail());
    console.log('password: ' + validatePassword());

    if (validateUsername() && validateEmail() && validatePassword()) {
        var _newUser = getUserName();   
        // add code to update registeredUsers array with new user and call render function
        // TODO
        document.registration.reset(); // reset form input fields
    }
}

function renderRegisteredUsers() {
    registeredUsers.forEach(function(registeredUser){
        var _newUser = document.createElement('li'); 
        _newUser.innerHTML = registeredUser;
        document.getElementById('registered-users').appendChild(_newUser);
    });
}

function validateUsername(){
    var _userName = getUserName();
    
    return !checkSpace(_userName);
}

function validateEmail(){
    var _email = getEmail();

    if (checkSpace(_email) === true) {
        return false;
    }

    // check for @
    var atSymbol = _email.indexOf('@');
    if(atSymbol < 1) {
        return false;
    }

    var dot = _email.indexOf('.');
    if(dot <= atSymbol + 2) {
        return false;
    } 

    // check that the dot is not at the end
    if (dot === _email.length - 1){
        return false;
    } 

    return true;
}

function validatePassword() {
    var _password = getPassword();
    var _confirmPassword = getConfirmPassword();

    if (_password !== _confirmPassword) {
        return false;
    }

    return true;
}

function checkSpace(sample) {
    return sample === '' || sample.indexOf(' ') > -1;
}

function getUserName() {
    if (typeof(document.registration.username.value) === 'undefined') {
        return '';
    } else {
        return document.registration.username.value;
    }   
}

function getEmail() {
    // TODO
}

function getPassword() {
    // TODO
}

function getConfirmPassword() {
    // TODO
}