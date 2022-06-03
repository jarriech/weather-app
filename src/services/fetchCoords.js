import fetchData from "./fetch";

const apiKey = 'aff733325cf6a93a43cab5daed100d88';

export default function fetchCoords(lat, lon, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  ).then((city) => {
    if (city) {
      setData((oldCities) => [...oldCities, city]);
    } else {
      alert("Ciudad no encontrada");
    }
  });
}
