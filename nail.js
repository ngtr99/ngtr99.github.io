'use strict';

// Create the wellcome message
document.body.style.backgroundImage = "url('header.png')";
document.body.style.backgroundSize = '100vw 100vh';
document.body.style.backgroundPosition = 'center';



const button = document.createElement('button');
button.onclick = moveCloud;
button.className = 'nav-button-home';
button.textContent = 'Go to Home';
document.body.appendChild(button);

function moveCloud() {};

button.addEventListener('click', function() {
    document.querySelector('.heading-content').style.display = 'block';
    document.getElementById('services').style.display = 'none';
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.querySelector('nav').style.transform = 'translateY(0px)';
    document.body.style.backgroundImage = "url('background.png')";
    document.querySelector('nav').style.display = 'block'; 
});

document.querySelector('.nav-button-services').addEventListener('click', function() {
    document.getElementById('services').style.display = 'block';
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.querySelector('.heading-content').style.display = 'none';
    document.querySelector('nav').style.display = 'block';
    document.querySelector('nav').style.transform = 'translateY(-50px)';
    document.querySelector('nav').style.transition = 'transform 0.5s ease';


});


document.querySelector('.nav-button-gallery').addEventListener('click', function() {
    document.getElementById('gallery').style.display = 'block';
    document.getElementById('services').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.querySelector('.heading-content').style.display = 'none';
    document.querySelector('nav').style.display = 'block';
    document.querySelector('nav').style.transform = 'translateY(-50px)';
    document.querySelector('nav').style.transition = 'transform 0.5s ease';

});

document.querySelector('.nav-button-contact').addEventListener('click', function() {
    document.getElementById('contact').style.display = 'block';
    document.getElementById('services').style.display = 'none';
    document.getElementById('gallery').style.display = 'none';
    document.querySelector('.heading-content').style.display = 'none';
    document.querySelector('nav').style.display = 'block';
    document.querySelector('nav').style.transform = 'translateY(-50px)';
    document.querySelector('nav').style.transition = 'transform 0.5s ease';
});

