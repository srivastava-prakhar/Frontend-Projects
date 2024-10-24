
const apiKey="c63b09155ba16c949abe2b6e8e95acc5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
  const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display ="block"
    document.querySelector(".weather").style.display ="none"

  }

  else{

    var data= await response.json();

console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "&deg;C";
document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
document.querySelector(".wind").innerHTML = data.wind.speed +" Km/h";


weatherIcon.src = `images/${data.weather[0].main}.png` ;

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display ="none"

}

  }
  searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
})

function keyHandle(event){
 if(event.key === 'Enter'){
  checkWeather(searchBox.value);
  }
}
