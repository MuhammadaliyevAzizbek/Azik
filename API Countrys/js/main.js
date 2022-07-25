const body = document.querySelector("body");
const mode1 = document.querySelector(".mode1");
const mode2 = document.querySelector(".mode2");
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const card = document.querySelectorAll(".cardlar div");
const input = document.querySelector(".input");
const inputt = document.querySelector("input");
const select = document.querySelector("select");
const region = document.querySelector("#region");
const loader = document.querySelector(".loader");
const contires = document.querySelector(".contires");

const api = "https://restcountries.com/v3.1/all";

const add = async (url)=>{
    const req = await fetch(url)
    const data = await req.json()
    showContent(data);
}

add(api)

const showContent = (countires)=>{
    countires.forEach((country) => {
        const countryDiv = document.createElement("div")
        countryDiv.classList.add("country")
        countryDiv.innerHTML= `
             <a>
                <img src=${country.flags.png} alt="flag" height="160px">
                <h3>${country.name.common}</h3>
                <p> <span>Population:</span> ${country.population}</p>
                <p> <span class="regions">Region:</span> ${country.region}</p>
                <p> <span>Capital:</span> ${country.capital}</p>

             </a>
        `;
        console.log(country.name.common);
        contires.appendChild(countryDiv)

        // console.log(country);
    });
}



inputt.addEventListener("input", ()=> {
    const searchCountry = inputt.value.trim().toLowerCase();
    contires.childNodes.forEach((country) => {
        if (
            !country
                .querySelector("h3")
                .textContent.toLowerCase()
                .includes(searchCountry)
        ) {
            country.classList.add("hidden");
        } else {
            country.classList.remove("hidden");
        }
    });
});



region.addEventListener("change", () => {
    const regionEl = region.value.trim().toLowerCase();
    console.log(regionEl);
    contires.childNodes.forEach((country) => {
        const regionEl = region.value.trim().toLowerCase();
        if (regionEl == "all"){
            country.classList.remove("hidden");
        } else if (
            !country
              .querySelector(".regions")
              .textContent.toLowerCase()
              .includes(regionEl)
        ) {
            country.classList.add("hidden");
        } else {
            country.classList.remove("hidden");
        }
    });
    input.value = "";
});

mode1.addEventListener("click", () => {
    navbar.classList.toggle("navbar2");
    header.classList.toggle("header2");
    body.classList.toggle("body2");
    inputt.classList.toggle("card2");
    
});