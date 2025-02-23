// DOM traversal
const cards = document.querySelector("#buss");
const ham = document.querySelector("#menu");
const nav = document.querySelector("nav");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const temp = document.querySelector("#temp");
const desc = document.querySelector("#desc");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humid = document.querySelector("#humid");
const rise = document.querySelector("#rise");
const set = document.querySelector("#set");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const banner = document.querySelector("#banner");
const dismiss = document.querySelector("#dismiss");

// responsive ham and nav
ham.addEventListener("click", () => {
  ham.classList.toggle("show");
  nav.classList.toggle("show");
});

// grid/list toggle
gridbutton.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});

// Instatiate date object
const date = new Date();

// dynamically inject date into doc
document.querySelector("#year").innerHTML = date.getFullYear();
document.querySelector(
  "#lastmodified"
).innerHTML = `Last modified: ${document.lastModified}`;

// handle banner
if (getWeekDay(0) !== "Monday" && getWeekDay(0) !== "Tuesday" && getWeekDay(0) !== "Wednesday") {
  banner.classList.toggle("hide");
  dismiss.classList.toggle("hide");
}

dismiss.addEventListener("click", () => {
  banner.classList.toggle("hide");
  dismiss.classList.toggle("hide");
})

// Weather api intergration
const api = "93a9d53a9d9ee8e453d854d354de453c";
const lat = "-17.83";
const lon = "31.21";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}&&cnt=17&units=imperial`;

async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl);
    const response2 = await fetch(forecastUrl);
    if (response.ok && response2.ok) {
      const data = await response.json();
      const data2 = await response2.json();
      displayResults(data, data2);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// get day of the week  
function getWeekDay(mod) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (date.getDay() + mod == 7) {
    mod = -6;
  } else if (date.getDay() + mod == 8) {
    mod = -5;
  }
  
  let day = weekday[date.getDay() + mod];
  return day;
}

function displayResults(data, data2) {
  temp.innerHTML = `${data.main.temp}&deg;C`;
  desc.innerHTML = data.weather[0].description;
  
  high.innerHTML = `High: ${data.main.temp_max}`;
  low.innerHTML = `Low: ${data.main.temp_min}`;
  humid.innerHTML = `Humidity: ${data.main.humidity}`;
  rise.innerHTML = `Sunrise: ${data.sys.sunrise}`;
  set.innerHTML = `Sunset: ${data.sys.sunset}`;
  day1.innerHTML = `Today: <strong>${data2.list[0].main.temp}⁰C</strong>`;
  day2.innerHTML = `${getWeekDay(1)}: <strong>${data2.list[8].main.temp}⁰C</strong>`;
  day3.innerHTML = `${getWeekDay(2)}: <strong>${data2.list[16].main.temp}⁰C</strong>`;
  // weatherIcon.setAttribute('___', _____);
  // weatherIcon.setAttribute('___', _____);
  // captionDesc.textContent = `${desc}`;
}

fetchWeather();

// Member Stuff
const memberUrl = "./data/members.json";

async function getMemberData(memberUrl) {
  const response = await fetch(memberUrl);

  const data = await response.json();
  let members = [];

  // Filter members on member level
  const filteredMembers = data.filter(
    (member) => member.level == `Gold` || member.level == `Silver`
  );
  for (let i = 0; i < 3; i++) {
    let index = Math.ceil(Math.random() * 10);

    while (!filteredMembers[index]) {
      index = Math.ceil(Math.random(filteredMembers.length) * 10);
      let member = filteredMembers[index];

      while (member in members) {
        index = Math.ceil(Math.random() * 10);
      }
    }

    members.push(filteredMembers[index]);
  }

  cardsMembers(members);
}

const cardsMembers = (members) => {
  members.forEach((member) => {
    // Create elements to add to the bussiness section
    let card = document.createElement("section");

    card.innerHTML = `<h3>${member.name}</h3>
    <p>${member.motto}</p>
    <div class="stuff">
      <img src="${member.image}" alt="${member.name} businness image" />
      <div>
        <p><strong>Email: </strong><a href="${member.mail}">${member.mail}</a></p>
        <p><strong>Phone:</strong> ${member.number}</p>
        <p><strong>memberUrl:</strong> ${member.memberUrl}</p>
        <p><strong>Membership:</strong> ${member.level}</p>
      </div>
    </div>`;

    cards.appendChild(card);
  });
};

getMemberData(memberUrl);
