const api = "8be7be43c685cad8f0f2fbe8e509a7f5";
const api2 = "054da27f9b3d29817bb56fee8b2eaa39";

// const input = document.querySelector("input");
// const btn = document.getElementById("btn");
// const icon = document.querySelector(".icon");
// const weather = document.querySelector("weather");
// const temperature = document.querySelector("temperature");
// const description = document.querySelector("description");

// btn.addEventListener("click", () => {
//   let city = input.value;
//   getWeather(city);
// });

// function getWeather(city) {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//   const iconCode = data.weather[0].icon;
//   icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`;

//   const weatherCity = data.name;
//   const WeatherCountry = data.sys.country;
//   weather.innerHTML = `${weatherCity}, ${WeatherCountry}`;
// }

const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    );
    const data = await response.json();
    console.log(data);

    const weatherCity = data.name;
    const weatherCountry = data.sys.country;
    weather.innerHTML = `${weatherCity}, ${weatherCountry}`;
    const iconCode = data.weather[0].icon;
    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="Weather Icon"/>`;

    let weatherTemp = (data.main.temp - 273).toFixed(1);
    temperature.innerHTML = `${weatherTemp}&deg;C`;
  } catch (error) {
    console.log(error);
  }
}
