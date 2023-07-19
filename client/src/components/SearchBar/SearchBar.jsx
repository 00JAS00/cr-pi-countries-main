import {useState} from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../Redux/Actions/Actions";
import style from "./searchBar.Module.css";
const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handlerChange = (event) => {
        setName(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        if(!name) return setError('Enter a country please')
        if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(name)) return setError('Only letters are allowed')
        dispatch(getCountriesByName(name))
        setName('')
    }   
    return (
        <div className={style.po}>
            <div className={style.container_input}>
                <input className={style.input} type="search" placeholder="Search" onChange={handlerChange} value={name}/>
                {error && <span className={style.error}>{error}</span>}
            </div>
            <button onClick={submitHandler} className={style.search}>Search</button>
        </div>
    )
}
export default SearchBar;