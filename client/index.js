// // Scroll Detection

// window.addEventListener('scroll', function() {
//     var aboutSection = document.querySelector('.about-me-content');
//     var navBar = document.querySelector('.nav-bar');
//     var profilePic = document.querySelector('.profile-pic');
//     var profileName = document.querySelector('.intro h1');
//     var icons = document.querySelector('.sidebar');

//     var aboutSectionTop = aboutSection.getBoundingClientRect().top;

//     if (aboutSectionTop <= 50) { // Adjust this value based on the height of your navbar
//         navBar.classList.add('sticky');
//         navBar.appendChild(profilePic);
//         navBar.appendChild(profileName);
//         navBar.appendChild(icons);
//     } else {
//         navBar.classList.remove('sticky');
//         document.querySelector('.profile').appendChild(profilePic);
//         document.querySelector('.profile').appendChild(profileName);
//         document.querySelector('.profile').appendChild(icons);
//     }
// });


