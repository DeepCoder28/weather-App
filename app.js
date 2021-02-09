const input = document.querySelector("input");
const button = document.querySelector("button");
const temperature = document.querySelector(".temperature");
const degree = document.querySelector(".degree");
let desc = document.createElement("h2");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let cityName = input.value;
  console.log(cityName);
  let apiKey = "90baf095cee2080da0f5bf11a617d7cc";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  getData(api);
});

function getData(api) {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let temp = data.main.temp_min;
      temperature.innerText = `${temp}\u00B0C`;

      let property = data.weather[0].main;
      description(property, data);
    })
    .catch((err) => {
      console.log("err fetching data: ", err);
    });
}

function description(prop, resp) {
  if (desc.innerText === "") {
    desc.innerText = resp.weather[0].description;
    degree.appendChild(desc);
  } else {
    degree.removeChild(desc);
    desc.innerText = resp.weather[0].description;
    degree.appendChild(desc);
  }
}
