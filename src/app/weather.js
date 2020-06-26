export class Weather {

    constructor(city, countryCode) {
        this.apikey = '87f83eefcef9a74d27e012b7668dc37f';
        this.city = city;
        this.countryCode = countryCode
    }

    // Obteniendo el objeto weather que tendrá toda la información
    async getWeather() {
            const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}`;
            const response = await fetch(URI);
            const data = await response.json();
            return data;
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }

}
