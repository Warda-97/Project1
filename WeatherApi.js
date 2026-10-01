
// ad20a0dd305442488104cc255431a546

// https://i.pinimg.com/originals/ad/9f/60/ad9f6059dd1fd712b622d471d870ce38.jpg
// https://static.vecteezy.com/system/resources/previews/024/825/182/large_2x/3d-weather-icon-day-with-rain-free-png.png
// kaarchi

// punjab
fetch("https://api.openweathermap.org/data/2.5/weather?q=Faisalabad,PB,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo1').innerHTML+=
  `
  <div class="box1">
  <img src="https://i.pinimg.com/originals/64/6f/52/646f52b084f90599794f122a3f475d20.jpg">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Lahore,PB,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo1').innerHTML+=`
  <div class="box2">
  <img src="https://i.pinimg.com/originals/cf/48/95/cf4895b56c77928eaeb95086bfcae790.jpg">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})


fetch("https://api.openweathermap.org/data/2.5/weather?q=Multan,PB,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo1').innerHTML+=`
  <div class="box3">
  <img src="https://i.pinimg.com/736x/3c/81/8e/3c818e9ed47b5e76ee7168a13d0a038f.jpg">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Rawalpindi,PB,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo2').innerHTML+=`
  <div class="box4">
  <img src="https://images.pexels.com/photos/6259182/pexels-photo-6259182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
     <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Sialkot,PB,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo2').innerHTML+=`
  <div class="box5">
 <img src="https://wpassets.graana.com/blog/wp-content/uploads/2024/06/clock-tower-sialkot-night-view.jpeg">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Bahawalpur,PB,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo2').innerHTML+=`
 
  <div class="box6">
 <img src="https://chakorventures.com/wp-content/uploads/2025/10/noor-mahal-museum-exterior-night-view-1024x585.png">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})








// sindh
fetch("https://api.openweathermap.org/data/2.5/weather?q=Karachi,SD,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo3').innerHTML+=
  `
  <div class="box7">
  <img src="https://i.pinimg.com/originals/78/9e/40/789e40cfbfc49a21baa097b060234d08.jpg">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Hyderabad,SD,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo3').innerHTML+=`
  <div class="box8">
  <img src="https://img.freepik.com/premium-photo/aerial-view-charminar-hyderabad-night-with-city-lights_1168123-68729.jpg">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})


fetch("https://api.openweathermap.org/data/2.5/weather?q=Sukkur,SD,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo3').innerHTML+=`
  <div class="box9">
  <img src="https://media.istockphoto.com/id/1859782418/photo/beautiful-night-view-of-lansdowne-bridge-sukkur-pakistan.jpg?s=612x612&w=0&k=20&c=W2b-FGMEWk8viX0bchju1AVMFLSdUqCr7cFY-kEsNTw=">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Larkana,SD,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo4').innerHTML+=`
  <div class="box10">
 <img src="https://i.ytimg.com/vi/cg0TvbKpr9U/maxresdefault.jpg">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Mirpur,SD,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo4').innerHTML+=`
  <div class="box11">
<img src="https://wpassets.graana.com/blog/wp-content/uploads/2024/04/Mirpur-Khas.jpg">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Nawabshah,SD,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo4').innerHTML+=`
 
  <div class="box12">
<img src="https://getwallpapers.com/wallpaper/full/7/5/b/30034.jpg">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

// Khyber Pakhtunkhwa

fetch("https://api.openweathermap.org/data/2.5/weather?q=Peshawar,KP,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo5').innerHTML+=
  `
  <div class="box13">
 <img src="https://i.pinimg.com/originals/ba/f1/8b/baf18b6c9951f73cd13d8b9b241fce53.jpg">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Mardan,KP,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo5').innerHTML+=`
  <div class="box14">
  <img src="https://tse1.mm.bing.net/th/id/OIP.3hVLhKYLuipoCxJVczhQigHaDh?r=0&pid=Api&h=220&P=0">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})


fetch("https://api.openweathermap.org/data/2.5/weather?q=Abbottabad,KP,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo5').innerHTML+=`
  <div class="box15">
  <img src="https://cdn-blog.zameen.com/blog/wp-content/uploads/2020/10/Abbottabad-1024x640.jpg">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Mingora,KP,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo6').innerHTML+=`
  <div class="box16">
<img src="https://i0.wp.com/www.pakistangulfeconomist.com/wp-content/uploads/2017/10/Mingora.jpg?fit=1045%2C600&ssl=1">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Kohat,KP,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo6').innerHTML+=`
  <div class="box17">
<img src="https://www.pakistangulfeconomist.com/wp-content/uploads/2017/10/Kohat.jpg">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Dera,KP,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo6').innerHTML+=`
 
  <div class="box18">
 <img src="https://visitsilkroad.org/wp-content/uploads/2020/08/Khyber-Pakhtunkhwa-Pakistan-featured_image.jpg">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})








// Balochistan
fetch("https://api.openweathermap.org/data/2.5/weather?q=Quetta,BA,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo7').innerHTML+=
  `
  <div class="box19">
 <img src="https://realpakistan.com.pk/wp-content/uploads/2024/11/Quetta-scaled.jpg">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Khuzdar,BA,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo7').innerHTML+=`
  <div class="box20">
  <img src="https://tse4.mm.bing.net/th/id/OIP.HHzbDE-ibaRPB2ufymGNhgHaE8?r=0&pid=Api&h=220&P=0">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})


fetch("https://api.openweathermap.org/data/2.5/weather?q=Gwadar,BA,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo7').innerHTML+=`
  <div class="box21">
  <img src="https://hunzaguidespakistan.com/wp-content/uploads/2022/02/See-Port-Gwadar.jpg">
        <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Hub,BA,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo8').innerHTML+=`
  <div class="box22">
 <img src="https://www.thenews.com.pk/assets/uploads/akhbar/2024-09-02/1226241_1310539_s_akhbar.jpg">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Sibi,BA,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo8').innerHTML+=`
  <div class="box23">
<img src="https://tse2.mm.bing.net/th/id/OIP.N7L_xU2mtGGW9m1sHCORWAHaFq?r=0&pid=Api&h=220&P=0">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Chaman,BA,PK&appid=ad20a0dd305442488104cc255431a546").
then(post=>post.json()).then(
  card=>{
    let temp=card.main.temp_max-273.15
    let maxtemp=card.main.temp_max-273.15
    let mintemp=card.main.temp_min-273.15
    let d= new Date(card.dt*1000)
  let sr= new Date(  card.sys.sunrise*1000)
   let ss= new Date(  card.sys.sunset*1000)
    let t=card.timezone/3600
  document.getElementById('demo8').innerHTML+=`
 
  <div class="box24">
 <img src="https://i.ytimg.com/vi/Ow53XsCwLHw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGsgayhrMA8=&rs=AOn4CLCUpSFaDUvwIZJOfszIe_M04R6Fig">
  <h4>${card.name} ${card.sys.country}</h4>
        <p>The Latitude of ${card.name} is ${card.coord.lat} and Longitude is ${card.coord.lon} </p>
        <h5>Weather report for ${card.name}</h5>
        <ul>
            <li>🌤️  Sky Status : ${card.weather[0].description}</li>
            <li>  <strong>Temperature</strong></li>
      <div class="temps">
       <li>Temperature : ${temp.toFixed(2)}°𝐶</li>
            <li>Maximun temperature : ${maxtemp.toFixed(2)}°𝐶</li>
            <li>Minimum temperature : ${mintemp.toFixed(2)}°𝐶</li></div>
             <li>💦 <strong>Moisture</strong> in the air :${card.main.humidity}%</li>
            <li><strong>   Pressure Measurements</strong></li>
           <div class="pressure">
            <li>Air pressure at sea level :${card.main.pressure}hPa</li>
            <li>Pressure measured at sea level :${card.main.sea_level}hPa</li>
            <li>Pressure measured at ground level :${card.main.grnd_level}hPa</li></div>
            <li><strong>🌬️ Wind</strong></li>
            <div class="wind">
            <li>Wind Speed : ${card.wind.speed} m/s</li>
            <li>Wind Direction : ${card.wind.deg}°</li>
            <li>Wind Gust : ${card.wind.gust} m/s</li></div>
            <li><strong>Cloudiness :</strong> ${card.clouds.all} %</li>
  <li><strong>Date & Time (dt) :</strong> ${d.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunrise :</strong>  ${sr.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Sunset :</strong> ${ss.toLocaleTimeString("en-US",{timeZone:"Asia/Karachi"})}</li>
  <li><strong>Timezone Offset :</strong> ${t}hours (UTC+5)</li>
        </ul>
            </div>
  `
})