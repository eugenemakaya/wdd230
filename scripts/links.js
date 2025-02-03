const baseURL = "https://eugenemakaya.github.io/wdd230/";
const linksURL = "https://eugenemakaya.github.io/wdd230/data/links.json";
const list = document.querySelector("#activities") 

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}   

function displayLinks(weeks) {
    weeks.forEach(week => {
        let li = document.createElement("li");
        let html = `${week.week}: `
        week.links.forEach(link => {
            html += `<a href="${link.url}">${link.title}</a> | `;
        });
        li.innerHTML = html;
        list.appendChild(li);
    });
}

getLinks();