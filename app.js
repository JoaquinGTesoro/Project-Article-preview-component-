/*==================
 Element Selectors
==================*/

const shareBtn = document.querySelectorAll(".share-btn-container");
const shareSection = document.querySelector(".share-section");
const reviewSection = document.querySelector(".review-section") 

/*================
 Event listeners
================*/

shareBtn.forEach(button => {
    button.addEventListener('click', () => {
        shareSection.classList.toggle("shift");
        reviewSection.classList.toggle("shift");
        button.classList.toggle("shift");
    });
})