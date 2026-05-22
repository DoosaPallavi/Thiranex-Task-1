async function getWeather(){

let city =
document.getElementById("city").value;

let apiKey =
"9b104a9a6e67297af66e624dbc793bec";

let url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

let response =
await fetch(url);

let data =
await response.json();

if(data.cod!="200"){

document.getElementById(
"weather"
).innerHTML=
"City not found";

return;

}

document.getElementById(
"weather"
).innerHTML=

`
<h2>${data.name}</h2>

<p>
Temperature:
${data.main.temp}°C
</p>

<p>
Humidity:
${data.main.humidity}%
</p>

<p>
Wind:
${data.wind.speed}
m/s
</p>

`;

}

catch{

document.getElementById(
"weather"
).innerHTML=
"Error loading weather";

}

}