// Class Container
const title = document.querySelector('.title');
let titleText = ['student', 'developer', 'freelancer', 'designer'];

let index = 0;
function updateTitle() {
    title.style.fontSize = '2rem';
    title.style.color = 'white';
    title.textContent = 'Hello, I am a ' + titleText[index];
    title.style.transition = 'all 0.5s';
    index = (index + 1) % titleText.length;
    setTimeout(updateTitle, 1000);
}

updateTitle();

