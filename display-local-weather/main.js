$(document).ready(() => {
    displayWeather();

    $("#temperature").on("click", toggleTemperature);
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
                    console.log(result);
                    var tempKalvin = result.main.temp;
                    var tempCelsius = Math.round(tempKalvin-273.15);
                    var weather = result.weather[0].description;
                    var location= result.name;
                    $("#weather").html(weather);
                    $("#location").html(location);
                    $("#temperature").html(tempCelsius+" °C");
                    $("#icon").attr("src", "http://openweathermap.org/img/w/"+result.weather[0].icon+".png")
                    var currentTemp = result.main.temp;  
                }
            });
        }
    });

}

function toggleTemperature(){
    if($("#temperature").html().indexOf("°C")>0){
        var tempCelsius=parseInt($("#temperature").html());
        $("#temperature").html(Math.round(tempCelsius*9/5+32)+ " F");
    } else {
         var tempFahrenheit=parseInt($("#temperature").html());
        $("#temperature").html(Math.round((tempFahrenheit-32)*5/9)+ " °C");
    }
}
