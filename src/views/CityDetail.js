import React from "react";
import fetchCityById from "../services/fetchCityById";
import styles from "./CityDetail.module.css";
import GoogleMaps from '../components/GoogleMaps'

function CityDetail({ id, onBack }) {
  const [city, setCity] = React.useState();
  React.useEffect(() => {
    fetchCityById(id, setCity);
  }, [id, setCity]);

  // if (city === undefined) return <h2>Cargando...</h2>;
  // else if (city === null) return <h2>Ciudad no encontrada</h2>;
  // return <div>{city.name}</div>;
  return (
    <div className={styles.city}>
      <button className={styles.button} onClick={onBack}>Back</button>
      {city === undefined && <h2>Cargando...</h2>}
      {city === null && <h2>Ciudad no encontrada</h2>}
      {city && (
        <div className={styles.detail}>
          <div className={styles.prop}>
            <label>Ciudad:</label>
            <span>{city.name}</span>
          </div>
          <div className={styles.prop}>
            <label>T max:</label>
            <span>{city.max}</span>
          </div>
          <div className={styles.prop}>
            <label>T max:</label>
            <span>{city.min}</span>
          </div>
          <div className={styles.prop}>
            <label>Viento:</label>
            <span>{city.speed} Km/h</span>
          </div>
          <div className={styles.prop}>
            <label>Latitud:</label>
            <span>{city.lat} °</span>
          </div>
          <div className={styles.prop}>
            <label>Longitud:</label>
            <span>{city.lon} °</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CityDetail;
