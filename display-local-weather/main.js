$(document).ready(() => {
    displayWeather();
});

function displayWeather() {

    $.ajax({
        dataType: "json",
        url: "http://ip-api.com/json",
        success: (result, status, xhr) => {
             $.ajax({
                dataType: "json",
                url: "http://api.openweathermap.org/data/2.5/weather?q="+result.city + "&APPID=" + "2e177495936266587a8e9af03cc3eee6",
                success: (result, status, xhr) => {
                    $("#weatherContent").html(JSON.stringify(result));
                }
            });
        }
    });

}
