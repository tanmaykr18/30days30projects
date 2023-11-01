//using api from openweatherapp
const apiKey = "faf597450eb152bd0d98bc1d0f256387";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=";
//adding 2 const in order to get input from user
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    //checking whether the city exist or not
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
    //now we have to update the data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    //updating the image of the app according to weather
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
})