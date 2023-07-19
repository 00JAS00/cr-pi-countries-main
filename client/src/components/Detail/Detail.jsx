import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getCountry} from "../../Redux/Actions/Actions";
import { NavLink } from "react-router-dom";

const Detail=()=> {
    const { id } = useParams();
    const dispatch = useDispatch();
    const country= useSelector(state => state.byId);
    // const del=true
    
    useEffect(()=>{
        dispatch(getCountry(id))
    },[dispatch, id])
    console.log(country)
    return (
        <div>
            <div>
                <h1>Detail</h1>
                <img src={country.flags} alt="flags" />
                <ul>
                    <li>id:{country.id}</li>
                    <li>name:{country.name}</li>
                    <li>continent:{country.continent}</li>
                    <li>capital:{country.capital}</li>
                    {country.subregion && <li>subregion:{country.subregion}</li>}
                    {country.subregion && <li>area:{country.area}</li>}
                    <li>population{country.population}</li>
                </ul>
                <NavLink to={`/home`}>Volver</NavLink>
            </div>
        </div>
    )
}

export default Detail