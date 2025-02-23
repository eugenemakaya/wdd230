const p1 = document.getElementById("password");
const p2 = document.getElementById("repeat_password");
const fb = document.getElementById("feedback");
const ham = document.querySelector("#menu");
const nav = document.querySelector("nav");

// Dynamiclly inject current year and date last modified in html

// update year span element
document.getElementById("year").innerHTML = new Date().getFullYear();

// Find the footer element by its ID
const footerYearElement = document.getElementById('lastModified');
console.log(footerYearElement);

// Set the text content of the footer element to the current year
if (footerYearElement) {
    footerYearElement.innerHTML = `Last Updated: ${document.lastModified}`;
}

// responsive ham and nav
ham.addEventListener("click", () => {
  ham.classList.toggle("show");
  nav.classList.toggle("show");
});

// Password match validation
p2.addEventListener("focusout", controller);

function controller() {
    if (p1.value !== p2.value) {
        p1.value = "";
        p2.value = "";
        p1.focus();

        fb.innerText = "Passwords do not match";
    } else {
        fb.innerText = "";
    }
}

// range validation and display 
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}