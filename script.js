const loc = document.querySelector(".location");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=a776a7f85ff3be7b0ce485ff9d49c2ff`;
  async function getResponse() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      let weather = Math.round(data.main.temp / 10);
      let humidity = data.main.humidity;
      let wind = data.wind.speed;
      document.querySelector(".temp").innerHTML =
        '<i class="bi bi-thermometer-sun"></i> ' + weather + "°C";
      document.querySelector(".humidity").innerHTML =
        '<i class="bi bi-moisture"></i> ' + humidity + " %";
      document.querySelector(".speed").innerHTML =
        '<i class="bi bi-wind"></i> ' + wind;
      document.querySelector(".error").innerHTML = "";
    } catch (err) {
      console.log(err);
      document.querySelector(".temp").innerHTML = "";
      document.querySelector(".humidity").innerHTML = "";
      document.querySelector(".speed").innerHTML = "";
      document.querySelector(".error").innerHTML = "Error, Location Not Found";
    }
  }
  getResponse();
});
