import { NavLink} from "react-router-dom";
import flag from "../../assets/flag_argentinian.jpg";
import styles from './Landing.module.css';

const Landing=()=>{
    return(
        <div className={styles.landing}>
            <h1>bienvenido a CountryWorld</h1>
            <img src="https://img.freepik.com/vector-premium/todas-banderas-nacionales-mundo-estilo-fondo_18981-512.jpg" alt="" />
            <p className={styles.p}>En esta página web sobre países puede ofrecer características interactivas, 
                como un motor de búsqueda para buscar países específicos, 
                filtros para clasificar países según diferentes criterios</p>
            <NavLink to="/home" className={styles.link}>Ir a Home</NavLink>
        </div>
    )
}
export default Landing;