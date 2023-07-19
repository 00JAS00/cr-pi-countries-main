import  Card  from '../Card/Card'
import {useSelector, useDispatch} from 'react-redux'
import { getCountries } from '../../Redux/Actions/Actions'
import style from './Cards.module.css'
import Paginate from '../Paginate/Paginate'

const Cards=()=> {
    const countries= useSelector(state => state.countries)
    const {page} = useSelector((state) => state)

    let desde = (page -1) * 10;
    let hasta = page * 10;

    let cantPages = countries.length / 10;

    let viewCountries = countries?.slice(desde, hasta)   
    
    return (
        <div className={style.Container}>
            <section className={style.Container_Cards}>
                {viewCountries.map(country => (
                    <Card
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        flags={country.flags}
                        continent={country.continent}
                    />
                    ))}
            </section> 
            <Paginate cantPages={cantPages}/>
    </div>
);

}
export default Cards;