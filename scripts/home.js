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