
    document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.querySelector('.theme-toggle');
        const body = document.body;
        
        // Check for the saved theme in localStorage
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-theme');
            toggleButton.textContent = '🌞'; // Change icon to sun for dark mode
        } else {
            body.classList.remove('dark-theme');
            toggleButton.textContent = '🌙'; // Change icon to moon for light mode
        }

        // Add event listener to the toggle button
        toggleButton.addEventListener('click', function() {
            body.classList.toggle('dark-theme');
            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                toggleButton.textContent = '🌞';
            } else {
                localStorage.setItem('theme', 'light');
                toggleButton.textContent = '🌙';
            }
        });
    });
