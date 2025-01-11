// update year span element
document.getElementById("year").innerHTML = new Date().getFullYear();

// Find the footer element by its ID
const footerYearElement = document.getElementById('lastModified');

// Set the text content of the footer element to the current year
if (footerYearElement) {
    footerYearElement.innerHTML = `Last Updated: ${document.lastModified}`;
}