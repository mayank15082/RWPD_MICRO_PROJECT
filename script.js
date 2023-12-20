document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered email and password
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform client-side validation
    if (!validateEmail(email)) {
        document.getElementById("message").textContent = "Please enter a valid email address.";
    } else if (!validatePassword(password)) {
        document.getElementById("message").textContent = "Password must be at least 8 characters long.";
    } else {
        // Display welcome message in a popup
        alert("Welcome, " + email + "!");

        // Redirect to index.html after successful login
        window.location.href = "index.html";
    }
});

function validateEmail(email) {
    // Simple email validation using a regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    // Password must be at least 8 characters long
    return password.length >= 8;
}
