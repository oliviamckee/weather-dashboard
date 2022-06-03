var lat = 44.97
var lon = 93.26

var getWeatherData = function() {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=f1c27cb81faeee38552c89fbd39e289e';
    fetch(apiUrl)
        .then(function(response) {
            if(response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                });
            } else {
                alert("Error: OpenWeather couldn't connect");
            }
        })
    
}

getWeatherData();