import { Link } from "react-router-dom";
import { Linkedin, Github } from "../components/Links";
import styles from "./About.module.css"
const About = ({onBack}) => {

return (
    <main>
    <Link to="/">
    <button className={styles.button} onClick={onBack}> Back </button>
    </Link>
    <div className={styles.detail}>
      <h1>About me</h1>
      <p>
        Hola, mi nombre es <span>Jose H. Arrieche</span>, estoy estudiando desarrollador web fullstack en SoyHenry.
      </p>
      <p>Ésta app esta hecha con React, Redux y RouterDOMLink que se conecta a la API de OpenWeatherLink.
      </p>
      <p>
        Para contactarme lo puedes hacer a travéz de mi <Linkedin />, también puedes ver otos proyectos en mi <Github /> .
      </p>
    </div>
  </main>
  )
}

export default About