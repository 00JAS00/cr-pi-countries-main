import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getCountry} from "../../Redux/Actions/Actions";
import { NavLink } from "react-router-dom";
import style from "./Detail.module.css"

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
        
            <div className={style.container}>
                <h1 className={style.title}>Detail</h1>
                <div>   
                    <div className={style.image}>
                        <img src={country.flags} alt="flags" />
                    </div>

                    <ul className={style.list}>

                        <li className={style.list_item}>id:{country.id}</li>
                        <li className={style.list_item}>name:{country.name}</li>
                        <li className={style.list_item}>continent:{country.continent}</li>
                        <li className={style.list_item}>capital:{country.capital}</li>
                        {country.subregion && <li className={style.list_item}>subregion:{country.subregion}</li>}
                        {country.subregion && <li className={style.list_item}>area:{country.area}</li>}
                        <li className={style.list_item}>population{country.population}</li>
                    </ul>
                </div>
                <NavLink to={`/home`}>Volver</NavLink>
            </div>
        
    )
}

export default Detail