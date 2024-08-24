

document.getElementById('navToggle').addEventListener('click', function() {
    var navContent = document.getElementById('navContent');
    if (navContent.classList.contains('active')) {
        navContent.classList.remove('active');
    } else {
        navContent.classList.add('active');
    }
});
