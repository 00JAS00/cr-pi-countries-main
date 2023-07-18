import  Card  from '../Card/Card'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getCountries } from '../../Redux/Actions/Actions'
import style from './Cards.module.css'

const Cards=()=> {
    const dispatch = useDispatch()
    const countries= useSelector(state => state.countries)
    if(countries.length===0){
    useEffect(()=>{
        dispatch(getCountries());

    },[dispatch])}
    return (
        <section className={style.Container_Cards}>
            {countries.map(country=>(
                    <Card 
                    key={country.id} 
                    id={country.id} 
                    name={country.name} 
                    flags={country.flags} 
                    continent={country.continent}/>
            ))}
            
        </section>
    )
}
export default Cards;