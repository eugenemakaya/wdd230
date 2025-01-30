let stuff =
  "first name, last name, email, mobile number, business name, and current date timestamp ";

const currentUrl = window.location.href;
const info = document.querySelector("#results");

// dynamically inject date into doc
const date1 = new Date()
document.querySelector("#year").innerHTML = date1.getFullYear();
document.querySelector(
  "#lastmodified"
).innerHTML = `Last modified: ${document.lastModified}`;

const formData = currentUrl.split("?")[1].split("&");
console.log(formData);

function show(query) {
  formData.forEach((el) => {
    if (el.startsWith(query)) {
      result = el
        .split("=")[1]
        .replace(/%40/g, "@")
        .replace(/%2C/g, ",")
        .replace(/%3A/g, ":")
        .split("+").join(" ")
    }
  });

  return result;
}

info.innerHTML = `
<p>${show("name")}'s Application</p>
<p>Applied on ${show("time")} for the ${show("membership")} membership</p>
<p>Applicant: ${show("first")} ${show("last")}</p>
<p>Phone: ${show("phone")}</p>
<p>Email: <a href="${show("email")}">${show("email")}</a></p>

`;
