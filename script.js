const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;
        if (isElementsOnScreen) {
            revealElements[i].classList.add("revealed")
        } else {
            revealElements[i].classList.remove("revealed")
        }
    }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);