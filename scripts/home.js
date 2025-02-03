const ham = document.querySelector("#menu");
const nav = document.querySelector("nav");
const desc = document.querySelector("#weather");

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

// initialize display element variable
const visitsDisplay = document.querySelector("#visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.innerHTML = `Visits Count: ${numVisits}`;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// increment the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// Weather api intergration
const api = "93a9d53a9d9ee8e453d854d354de453c";
const lat = "-17.83";
const lon = "31.21";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`;

async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok && response2.ok) {
      const data = await response.json();
      console.log(data); // testing only
      desc.innerHTML = `${data.main.temp}&deg;C} - ${data.weather[0].description}`;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchWeather();