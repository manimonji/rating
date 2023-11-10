document.addEventListener("DOMContentLoaded", (e) => {
    let selected = document.querySelector(".selected");
    
    const rating = document.querySelector(".rating");
    const buttons = document.querySelectorAll(".ratings > button");
    const submitButton = document.querySelector(".rating > button");

    const thankYou = document.querySelector(".thank-you");
    
    for(const button of buttons) {
        button.onclick = (e) => {
            if (selected) selected.classList.remove("selected");

            selected = button;

            e.target.classList.add("selected");
        };
    }

    submitButton.onclick = () => {
        loadThankYou(rating, thankYou, selected.querySelector("div").innerText)
    }
});

const loadThankYou = (unload, load, rating) => {
    unload.style.display = "none";
    load.style.display = "flex";
    load.querySelector("p > span").innerHTML = rating;
}