import  Card  from '../Card/Card'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getCountries } from '../../Redux/Actions/Actions'
import style from './Cards.module.css'

const Cards=()=> {
    const dispatch = useDispatch()
    const countries= useSelector(state => state.countries)
    countries.length<1 && dispatch(getCountries());
    const filter=useSelector(state=>state.filter)
    // * Con stringify() convierte un objeto en una cadena y asi puedo comparar si son iguales o no
    const compared=JSON.stringify(filter)!==JSON.stringify(countries);
    return (
    <section className={style.Container_Cards}>
        {compared? countries.map(country => (
            <Card
                key={country.id}
                id={country.id}
                name={country.name}
                flags={country.flags}
                continent={country.continent}
            />
            ))
        : filter.map(country => (
            <Card
                key={country.id}
                id={country.id}
                name={country.name}
                flags={country.flags}
                continent={country.continent}
            />
            ))}
    </section>
);

}
export default Cards;