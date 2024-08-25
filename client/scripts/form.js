

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async function(event) {

        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // console.log('First Name', firstName);
        // console.log('Last Name', lastName);
        // console.log('Email:', email);
        // console.log('Message:', message);

        const formData = {
            firstName,
            lastName,
            email,
            message
        };

        try {
            
        } catch (error) {
            
        }

    });
});