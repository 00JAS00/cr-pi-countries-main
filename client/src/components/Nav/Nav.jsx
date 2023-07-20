import style from './Nav.module.css'
import { NavLink } from "react-router-dom";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getCountries } from "../../Redux/Actions/Actions";
import { useLocation } from "react-router-dom";


const Nav=()=> {
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    return (
        <nav className={style.nav}>
            <div className={style.container}>
                
                <NavLink to="/home" className={style.home} onClick={() => dispatch(getCountries())} >home</NavLink>
                <div className={style.searchBar}>
                    <NavLink to="/activities" className={style.navLink}>Activities</NavLink>
                    <NavLink  to='/form' className={style.navLink}> crear actividades</NavLink>
                    <SearchBar />
                </div>
            
            </div>          
            <Filters />
        </nav>
    )
}
export default  Nav;