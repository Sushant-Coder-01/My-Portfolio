// JavaScript to toggle the menu
function toggleMenu() {
    const navContent = document.querySelector('.nav-content');
    navContent.classList.toggle('active');
}

// Close the menu when a link is clicked
document.querySelectorAll('.nav-content a').forEach(link => {
    link.addEventListener('click', () => {
        const navContent = document.querySelector('.nav-content');
        navContent.classList.remove('active');
    });
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    const navContent = document.querySelector('.nav-content');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (!navContent.contains(event.target) && !navToggle.contains(event.target)) {
        navContent.classList.remove('active');
    }
});
