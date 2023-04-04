const apiKey = "ff7be865c2500f44610772c270b245d4";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getWeather() {
  const city = document.querySelector("#city-input").value || "Selma";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const date = new Date(data.dt * 1000);
      const day = days[date.getDay()];
      const dayDate = `${day}, ${date.toLocaleDateString()}`;

      const temperature = `${data.main.temp}°C`;
      const humidity = `${data.main.humidity}%`;
      const pressure = `${data.main.pressure} hPa`;
      const wind = `${data.wind.speed} m/s`;
      const visibility = `${data.visibility / 1000} km`;
      const weatherDescription = data.weather[0].description;

      document.querySelector("#city-name").textContent = data.name;
      document.querySelector("#day-date").textContent = dayDate;
      document.querySelector("#temperature").textContent = temperature;
      document.querySelector("#humidity").textContent = humidity;
      document.querySelector("#pressure").textContent = pressure;
      document.querySelector("#wind").textContent = wind;
      document.querySelector("#visibility").textContent = visibility;
      document.querySelector("#weather-description").textContent = weatherDescription;
    })
    .catch(error => {
      console.log(error);
      alert("Error retrieving weather data. Please try again.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  getWeather();
});
