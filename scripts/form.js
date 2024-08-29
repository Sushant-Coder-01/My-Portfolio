

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async function(event) {

        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('First Name', firstName);
        console.log('Last Name', lastName);
        console.log('Email:', email);
        console.log('Message:', message);

        const formData = {
            firstName,
            lastName,
            email,
            message
        };

        try {
            // send the data to server.
            const response = await fetch('http://localhost:3000/api/contact/submit', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // check if a request was succesful
            if(!response.ok){
                throw new Error('Network response was not ok');
            }

            // Parse and handle the server response
            const result = await response.json();

            console.log('Server response:', result);

            alert('Yout message has been sent successfully!');
            
        } catch (error) {

            console.log('There was a problem with fetch operation:', error);

            alert('There was an error while sending  your message. Please try again later.');
            
        }

    });
});