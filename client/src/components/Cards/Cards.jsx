import  Card  from '../Card/Card'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getCountries } from '../../Redux/Actions/Actions'

const Cards=()=> {
    const dispatch = useDispatch()
    const countries= useSelector(state => state.countries)
    useEffect(()=>{
        dispatch(getCountries());

    },[dispatch])
    console.log(countries)
    return (
        <section className='Container_Cards'>
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