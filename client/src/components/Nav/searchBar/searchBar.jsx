import React, {useState} from "react";
import { NavLink } from "react-router-dom"
const searchBar = () => {
    const [id, setId] = useState("");
    const handleChange = (event) => {
        event.preventDefault();
        setId(event.target.value);
    }   
    return (
        <div>
            <input type="search" value={id}/>
            <button onClick>Search</button>
        </div>
    )
}