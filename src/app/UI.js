export class UI {

    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }


    render(weather) {
        this.location.innerHTML = weather.name + ' / ' + weather.sys.country;
        this.desc.innerHTML = weather.weather[0].description;
        this.string.innerHTML = `Temp: ${Math.round(weather.main.temp / 10).toFixed(2)} °C`
        this.humidity.innerHTML = `Humedad: ${weather.main.humidity} %`
        this.wind.innerHTML = `Viento: ${weather.wind.speed} m/s`
    }

    alertDanger() {
        document.getElementById('alert-danger').style.display = "block";
        setTimeout(() => {
            document.getElementById('alert-danger').style.display = "none";
        }, 3000)
    }

    alertSuccess() {
        document.getElementById('alert-success').style.display = "block";
        setTimeout(() => {
            document.getElementById('alert-success').style.display = "none";
        }, 3000)
    }

}