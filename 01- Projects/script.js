const apiKey = "YOUR API KEY HERE"; // 🔑 Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    weatherResult.innerHTML = "<p>Please enter a city name!</p>";
    return;
  }
  getWeather(city);
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    // Extract useful info
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    weatherResult.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temperature: ${temp} °C</p>
      <p>🌥 Condition: ${desc}</p>
      <p>💧 Humidity: ${humidity}%</p>
      <p>💨 Wind Speed: ${wind} m/s</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `<p>${error.message}</p>`;
  }
}
