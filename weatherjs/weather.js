class Weather {
    constructor(city, state) {
        this.apiKey = "062fdc566c944f78";
        this.city = city;
        this.state = state;
    }

    // async function returns value as a promise.
    async getWeather() {
        // await returns the fulfilled value of the promise
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}