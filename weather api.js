
function forecast(city, day) {

fetch(api.openweathermap.org/data/2.5/forecast?q= + city +&units=imperial&appid=39c873996e9fb79c84b155bc1e9e737e').then(res => {
  return res.json();.then(function(res) {

  })
  .then(data => console.log(data))
}
