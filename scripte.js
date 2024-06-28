document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // Here you can add your logic to send the form data to the server
        // For example, using fetch or XMLHttpRequest
    } else {
        alert('Please fill in all fields.');
    }
});