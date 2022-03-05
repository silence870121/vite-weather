<script setup>
// import module from './components/module.vue'
import { ref, reactive, onMounted } from 'vue'
const api_key = ref('f3c0bb8f23f9c29eb54d6eba4661e040')
const url_base = ref('https://api.openweathermap.org/data/2.5/')
const query = ref('')
const weather = ref({})

function fetchWeather(e) {
  if (e.key == "Enter") {
    fetch(`${url_base.value}weather?q=${query.value}&unit=metric&appid=${api_key.value}`)
      .then(res => {
        console.log(res);
        return res.json()
      }).then(serResults)
  }
}
function serResults(results) {
  console.log(results);
  weather.value = results;
}

function dateBuilder() {
  let d = new Date();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}

</script>

<template>
  <header>
    <h1>Welcome Vite Weather!</h1>
    <div class="search-box">
      <input
        type="text"
        class="search-bar"
        placeholder="Search..."
        v-model="query"
        @keypress="fetchWeather"
      />
    </div>
  </header>

  <main>
    <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
      <div class="location-box">
        <!-- <div class="location">Taiwan</div> -->
        <!-- <div class="date">Friday 5 March 2022</div> -->

        <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
        <div class="date">{{ dateBuilder() }}</div>
      </div>

      <div class="weather-box">
        <!-- <div class="temp">25°c</div> -->
        <!-- <div class="weather">Sunny</div> -->

        <div class="temp">{{ (weather.main.temp - 273.15).toFixed(1) }}°c</div>
        <div class="weather">{{ weather.weather[0].main }}</div>
      </div>
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";

body {
  background-size: cover;
  background-position: bottom;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    ),
    url("./assets/wallpapers/Lakeside_warm.png");
}
#app {
  max-width: 720px;
  /* min-height: 50vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  transition: all 0.4s;
  padding: 5rem 0;
}
header,
main {
  width: 100%;
}
h1 {
  text-align: center;
  font-size: 2rem;
  color: white;
}
.search-box {
  width: 100%;
  padding: 2.5rem;
}
.search-bar {
  width: 100%;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.25);
  color: #313131;
  font-size: 1.5rem;

  border: unset;
  border-radius: 0.25rem;
  appearance: none;
  outline: none;

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);

  transition: all 0.2s;
}
.search-bar:focus {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
}

.location-box .location {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.25);
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 1rem 1.5rem;
  color: #fff;
  font-size: 5rem;
  font-weight: bolder;

  text-shadow: 3px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 1rem;
  margin: 2rem 0;

  box-shadow: 3px 4px 0 rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  text-shadow: 3px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
