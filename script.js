var Weather = []

var addToArray = function (data) {
  
  //create an object using information
  var weather = {
    description: data.weather[0].description, 
    country: data.sys.country,
    name: data.name,
    temp: (data.main.temp)-273.15 + " Degree ",
   
  }
  //push object to the array
  Weather.push(weather)

  //empty input values
  $('#city').val('');

  //invoke addtoHTML
addToHtml();
}

var fetch = function(){
  var city = $('#city').val();
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=074767c3737ae2eec90174204f167021';

  $.ajax({
      method: "GET",
      url: url,
      dataType: "json",
      success: function(data) {

        addToArray(data);
      },
      error: function() {
        console.log("error");
      }
  }); 
}

var addToHtml = function(){
  $('.Forecast').empty()

  var source = $('#weather-template').html();

  var template = Handlebars.compile(source);

  for(var i = 0; i < Weather.length; i ++){
    var newHTML = template(Weather[i]);
    $('.Forecast').append(newHTML); 
  }

}

// add comments

$('#btncomment').on('click',function(){
  alert('yoo')
});



$('#search').on('click', function(e){
  e.preventDefault()

 
  
  //api request
  fetch();
 });







