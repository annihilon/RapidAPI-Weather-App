const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "be41f3aad5msha074dfaae40a2c9p1964b8jsnd2b2de0b5205",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city)=>{
	cityname.innerHTML =city
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
		options
	  )
		.then((response) => response.json())
		.then((response) => {
		  
		  cloud_pct.innerHTML = response.cloud_pct;
		  feels_like.innerHTML = response.feels_like;
		  humidity.innerHTML = response.humidity;
		  max_temp.innerHTML = response.max_temp;
		  min_temp.innerHTML = response.min_temp;
		  sunrise.innerHTML = response.sunrise;
		  sunset.innerHTML = response.sunset;
		  temp.innerHTML = response.temp;
		  wind_degrees.innerHTML = response.wind_degrees;
		  wind_speed.innerHTML = response.wind_speed;
		})
		.catch((err) => console.error(err));
}
SubmitEvent.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("delhi")