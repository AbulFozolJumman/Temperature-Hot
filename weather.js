// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}&units=metric
const api = `46ad7457603b9b0104e633e78cd60e16`;
const loadWeather = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => showWeather(data));
}
const showWeather = weather => {
    console.log(weather);
    setInnerTextById("city-name", weather.name);
    setInnerTextById("temp", weather.main.temp);
    setInnerTextById("condition", weather.weather[0].main);
}

// getElementFromInnerText
function setInnerTextById(id, text) {
    document.getElementById(id).innerText = text;
}

// Search btn click handler
document.getElementById("search-btn").addEventListener("click", function () {
    const searchInput = document.getElementById("search-input");
    const city = searchInput.value;
    loadWeather(city);
});
