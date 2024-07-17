let json, jsonLang;

fetch("./env.json")
  .then((response) => response.json())
  .then((obj) => {
    json = obj;

    const myAPI = json.API_KEY;

    const input = document.getElementById("input");
    const button = document.getElementById("button");

    const img = document.getElementById("img");

    const cityName = document.getElementById("city");

    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const feels = document.getElementById("feels");

    async function getWeather(city) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPI}`;

      try {
        const RESPONSE = await fetch(URL);
        if (!RESPONSE.ok) {
          cityName.textContent = "Lütfen Geçerli Bir Şehir Giriniz";
          img.style.width = "80%";
          img.src = "assets/404.png";
        }

        const DATA = await RESPONSE.json();
        console.log(DATA);

        switch (DATA.weather[0].main) {
          case "Clouds":
            img.src = "assets/cloud.png";
            break;
          case "Clear":
            img.src = "assets/clear.png";
            break;
          case "Rain":
            img.src = "assets/rain.png";
            break;
          case "Mist":
            img.src = "assets/mist.png";
            break;
          case "Snow":
            img.src = "assets/snow.png";
            break;
        }

        temperature.textContent = `${Math.round(DATA.main.temp - 273.15)}°C`;
        humidity.textContent = "%" + DATA.main.humidity;
        wind.textContent =
          Math.floor((DATA.wind.speed * 3600) / 1000) + "  km/s";
        feels.textContent = `${Math.round(DATA.main.feels_like - 273.15)}°C`;

        let sentence = DATA.name;
        cityName.innerHTML =
          sentence.trim().split(" ")[0] + " / " + DATA.sys.country;
      } catch (error) {
        city.textContent = "Error";
      }
    }

    button.addEventListener("click", () => {
      getWeather(input.value);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        getWeather(input.value);
      }
    });
  });