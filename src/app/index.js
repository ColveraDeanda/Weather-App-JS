const { Weather } = require('./weather');
const { UI } = require('./UI')
require('./index.css');

// Create your own object by default
const weather = new Weather('Moscow', 'Ru');
const ui = new UI();

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);

var button = document.getElementById('w-change-btn');
button.addEventListener("click" , (e) => {
    var err = "";
    const city = document.getElementById('city').value;
    const country = document.getElementById('countryCode').value;
        weather.changeLocation(city, country);
        fetchWeather().catch((e) => {
            ui.alertDanger();
        });
    document.querySelector('#w-form').reset();
    e.preventDefault();
});
