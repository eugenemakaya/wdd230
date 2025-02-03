const p1 = document.getElementById("password");
const p2 = document.getElementById("repeat_password");
const fb = document.getElementById("feedback");

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