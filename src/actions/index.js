import axios from 'axios';

const API_KEY = 'db6b97310d9a1b1173695fa2fcf4b04b';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
