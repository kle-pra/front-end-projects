class Storage {
    constructor() {
        this.defaultCity = "Miami";
        this.defaultState = "FL";
    }

    getLocationData() {
        if (localStorage.getItem('city') === null || localStorage.getItem('state')===null) {
            return {
                city: this.defaultCity,
                state: this.defaultState
            }
        } else {
            return {
                city: localStorage.getItem('city'),
                state: localStorage.getItem('state')
            }
        }
    }

    setLocationData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);

    }

}