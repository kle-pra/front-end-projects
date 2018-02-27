const storage = new Storage();
console.log(storage.getLocationData());
const weather = new Weather(storage.getLocationData().city, storage.getLocationData().state);
const ui = new UI();

document.addEventListener('DOMContentLoaded', showWeather);
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city, state);
    storage.setLocationData(city, state);

    showWeather();

    //close modal;
    //bootstrap modal uses jquery to close...
    $("#locModal").modal("hide");

});

function showWeather(){
    weather.getWeather().then(data => {
        ui.paint(data);
    }).catch(error => console.log(error));
}
