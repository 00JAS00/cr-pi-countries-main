import style from "./Filters.module.css";
import { useDispatch,useSelector } from "react-redux";
import {useEffect} from "react";
import { getActivities, orderByName, orderPopulation, filterByContinent, filterByActivity } from "../../Redux/Actions/Actions";



const Filters=()=>{
    const dispatch = useDispatch()
    const activities = useSelector(state=>state.activities)
    const countries = useSelector(state=>state.countries)

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    // * OPTION DE ACTIVIDADES VALORES

    let activity= activities.map(element => element.name)
        // * Filtro de valores repetidos

    const valuesSet= [...new Set(activity)];

    // * OPTION DE CONTINENTES
    
    let continents = countries.map(element => element.continent)
    const valuesSetContinent= [...new Set(continents)];

    // * HANDLERS

    const handlerActivity = (event) => {
        const activity = event.target.value
        dispatch(filterByActivity(activity))
    }
    const handlerFilterByContinent = (event) => {
        const continent = event.target.value;
        dispatch(filterByContinent(continent))
    }

    const handlerOrderByName = (event) => {
        const name = event.target.value;
        dispatch(orderByName(name))
    }

    const handlerByPopulation = (event) => {
        const major = event.target.value;
        dispatch(orderPopulation(major))
    }

    return (
        <div className={style.container}>
            <button className={style.reset}>Reset</button>
            <select name="alf"  onChange={handlerOrderByName}>

                <option  selected>alfabetical</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
            <select name="population" onChange={handlerByPopulation}>
                <option  selected>populations</option>
                <option value="Maj">Higher population</option>
                <option value="Min">Lower population</option>
            </select>
            <select name="continent" onChange={handlerFilterByContinent}>
                <option  selected>continents</option>
                
                {valuesSetContinent.map((element,index) => (<option  key={index} value={element}>{element}</option>))}
            </select>
            {valuesSet.length>0&&<select name="Activity" onChange={handlerActivity}>
                <option disabled selected>activities</option>
                {valuesSet.map((element,index) => (<option  key={index} value={element}>{element}</option>))}
                </select>}
        </div>
    )

}

export default Filters