document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! We have received your message.`;
    responseMessage.style.color = 'green';

    // Optionally, send the form data to a server here using fetch or XMLHttpRequest
});
