import fetchData from "./fetch";

const apiKey = 'aff733325cf6a93a43cab5daed100d88';

export default function fetchCityById(id, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
  ).then((city) => {
    if (city) {
      setData(city);
    } else {
      setData(null);
    }
  });
}
