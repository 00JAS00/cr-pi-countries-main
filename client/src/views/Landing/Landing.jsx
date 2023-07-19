import { Link} from "react-router-dom";
import styles from './Landing.module.css';

const Landing=()=>{
    return(
        <div className={styles.landing}>
            <h1>bienvenido a CountryWorld</h1>
            <img src="https://usagif.com/wp-content/uploads/gifs/globe-9.gif" alt="" />
            <p>En esta página web sobre países puede ofrecer características interactivas, 
                como un motor de búsqueda para buscar países específicos, 
                filtros para clasificar países según diferentes criterios</p>
            <button><Link to="/home">Ir a Home</Link></button>
        </div>
    )
}
export default Landing;