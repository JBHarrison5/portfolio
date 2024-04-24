const leftButton = document.querySelector('.leftButton');
const rightButton = document.querySelector('.rightButton');
const projectButtons = document.querySelectorAll('.projectButton');
let projectIndex = 1;

const displayProjectCardClicks = (operator) => {
    let itemToHide = document.querySelector(`.project${projectIndex}`);
    itemToHide.classList.toggle("hidden")
    projectIndex += operator;
    if (projectIndex > 10) {
        projectIndex = 1;
    } else if (projectIndex < 1) {
        projectIndex = 10;
    }
    let itemToShow = document.querySelector(`.project${projectIndex}`);
    itemToShow.classList.toggle("hidden");
}

const displayProjectCardButtons = (projectNum) => {
    let itemToHide = document.querySelector(`.project${projectIndex}`);
    itemToHide.classList.toggle("hidden")
    projectIndex = projectNum;
    let itemToShow = document.querySelector(`.project${projectIndex}`);
    itemToShow.classList.toggle("hidden");
}

leftButton.addEventListener("click", () => {
    displayProjectCardClicks(-1);
})

rightButton.addEventListener("click", () => {
    displayProjectCardClicks(1);
})

for (let i = 0; i < projectButtons.length; i++) {
    projectButtons[i].addEventListener("click", () => {
        displayProjectCardButtons((i+1));
    })
}