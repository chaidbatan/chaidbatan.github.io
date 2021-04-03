//signup page validation


function signup(e) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    /*var signupData = {
        name: name,
        email: email,
        username: username,
        pass: password
    }; */

    //var json = JSON.stringify(signupData);
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('password', JSON.stringify(password));
    console.log('signup successful');
    window.location.href = "index.html";
}

function log() {
    event.preventDefault();
    var userName = localStorage.getItem('username');
    var pw = localStorage.getItem('password');
    var loginUsername = document.getElementById('user')
    var loginPw = document.getElementById('pass')

    if (loginUsername.value === userName && loginPw.value === pw) {
        alert('You are logged in.');
        console.log('login successful');
        window.location.href = "index.html";
    }
    else {
        alert('ERROR.');
        console.log('login error');
    }
}