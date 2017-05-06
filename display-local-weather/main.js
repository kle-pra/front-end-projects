$(document).ready(() => {
    displayWeather();
});

function displayWeather() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            $.ajax({
                dataType: "json",
                url: "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude+"&APPID="+"2e177495936266587a8e9af03cc3eee6",
                success: (result, status, xhr) => {
                    $("#weatherContent").html(JSON.stringify(result));
                }
            });
        });


    }
}
