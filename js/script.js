$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=mexico_city,mx&appid=ad8db2a0ffe78f3f21d56c61ab7cf65a&lang=es&units=metric",
  success: function( data ) {
    $( "#weather" )
    .html(data.weather[0].description ); 
    $( "#temp" )
    .html(data.main.temp + " ºC");
    $( "#pressure" )
    .html(data.main.temp + " hPa");
    $( "#humed")
    .html(data.main.humidity + " %");
    $( "#wind" )
    .html(data.wind.speed + " km/h");    
  }
});

$.ajax({
  url: "http://api.geonames.org/timezoneJSON?lat=35&lng=137&username=demo",
  success: function( data ) {
    $( "#hora1" )
    .html(data.time); 
  }
});

$.ajax({
  url: "http://api.geonames.org/timezoneJSON?lat=23.881206&lng=-101.93075&username=demo",
  success: function( data ) {
    $( "#hora0" )
    .html(data.time); 
  }
});



$.ajax({
  url: "http://api.geonames.org/timezoneJSON?lat=47.516231&lng=14.550072&username=demo",
  success: function( data ) {
    $( "#hora2" )
    .html(data.time); 
  }
});

