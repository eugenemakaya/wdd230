const welcome = document.querySelector("#welcome");
const closeBtn = document.querySelector("#close");

const date = new Date();

// dynamically inject date into doc
document.querySelector("#year").innerHTML = date.getFullYear();
document.querySelector(
  "#lastmodified"
).innerHTML = `Last modified: ${document.lastModified}`;

closeBtn.addEventListener("click", () => {
  welcome.classList.toggle("close");
  closeBtn.classList.toggle("close");
});

function daysBetween(time) {
  const msToDays = 86400000;
  let daysBetween = (Date.now() - time) / msToDays;
  console.log(daysBetween);
  return daysBetween;
}

if (!localStorage.getItem("visit")) {
  welcome.innerHTML = `Welcome! Let us know if you have any questions.`;

  localStorage.setItem("visit", `${Date.now()}`);
} else if (localStorage.getItem("visit")) {
  if (daysBetween(parseFloat(localStorage.getItem("visit"))) < 1) {
    welcome.innerHTML = `Back so soon! Awesome!`;
    localStorage.setItem("visit", `${Date.now()}`);
  } else if (daysBetween(parseFloat(localStorage.getItem("visit"))) > 1) {
    welcome.innerHTML = `You last visited ${daysBetween(
      parseFloat(localStorage.getItem("visit"))
    ).toFixed(0)} days ago.`;
    localStorage.setItem("visit", `${Date.now()}`);
  }
}
