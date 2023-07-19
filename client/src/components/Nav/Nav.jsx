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
        <nav>
            <Filters />
            {pathname == '/home' && <NavLink to="/home" onClick={()=>dispatch(getCountries())}>home</NavLink>}
            <SearchBar />
            
        </nav>
    )
}
export default  Nav;