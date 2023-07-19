import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
const Card=({id,name,flags,continent})=> {
    
    return (
        <article className={style.card}>

            <NavLink to={`/detail/${id}`} className={style.nameLink}>
            <div className={style.image}>
                <img src={flags} alt={`Flag of ${name}`} className={style.cimage}/>
            </div>

            <div>
                <h2>{`Name:${name}`}</h2>
                <h2>{`Continent:${continent}`}</h2>
            </div>
            </NavLink>
            
        </article>
    )
}

export default Card;