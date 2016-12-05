function setWeatherIcon(icon) {
    var icon = icon.toLowerCase();

    switch(icon) {
        case "dizzle":
            addIcon(icon);
            break;
        case 'clouds':
            addIcon(icon)
            break;
        case 'rain':
            addIcon(icon)
            break;
        case 'snow':
            addIcon(icon)
            break;
        case 'clear':
            addIcon(icon)
            break;
        case 'thunderstom':
            addIcon(icon)
            break;
        default:
    }
}

function addIcon(icon) {
    $("div." + icon).removeClass('hide');
}

$(document).ready(function () {
    var cel, fah = 0;
    var isCel = true;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var weather = {};
            var latitude  = position.coords.latitude;
            var longitude = position.coords.longitude;
            
            var api = "http://api.openweathermap.org/data/2.5/weather?";
            var position = "lat=" + latitude + "&lon=" + longitude;
            var units = "&units=metric";
            var appid = "&appid=00e4991d6afafefc700fd396c69a45e7";
            
            $.getJSON(api+position+units+appid, function(json) {
                var jsonData = JSON.stringify(json);
                var data = $.parseJSON(jsonData);

                cel = Math.round(data.main.temp);
                fah = Math.round( (data.main.temp * 9) / 5 + 32);

                $("#city").text(data.name);
                $("#country").text(data.sys.country);
                $("#temp").text(Math.round(data.main.temp));
                $("#des").text(data.weather[0].description);
                setWeatherIcon(data.weather[0].main);
            });
        });
    }

    $(".temp-icon").on("click", function() {
        if(isCel) {
            $(".temp-icon").removeClass("wi-celsius").addClass("wi-fahrenheit");
            $("#temp").text(fah);
            isCel = false;
        }else{
            $(".temp-icon").removeClass("wi-fahrenheit").addClass("wi-celsius");
            $("#temp").text(cel);
            isCel = true;
        }
    });
    
});