import { useSelector, useDispatch } from "react-redux";
import { getCountries, postActivity} from "../../Redux/Actions/Actions";
import {useEffect, useState} from "react";
import validation from "./validation";
import styles from "./Form.module.css"

const Form=()=> {
    const countries = useSelector(state => state.countries)
    const dispatch = useDispatch()

    const [errors, setErrors] = useState({})
    const [selected, setSelected] = useState("");

    let countriesList = countries.map(country => {
        return({
            name:country.name,
            flag: country.flags
        })
    });

    

    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries:[],
        
    })
    

    const handleChange = (event) => {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...form, 
            [event.target.name]: event.target.value
        }))
    }

    const handleCountries = (event) => {
        if(event.target.value !== 'Select Country' && !form.countries.includes(event.target.value)){
            setForm({
                ...form,
                countries:[...form.countries, event.target.value]
            })
            setErrors(validation({
                ...form, 
                countries: [...form.countries, event.target.value]
            }))
        }
    }


    const handleSeasons = (event) => {
        if(event.target.value !== 'Select season' && !form.season.includes(event.target.value)){
            setForm({
                ...form,
                season: event.target.value
            })
            setErrors(validation({
                ...form, 
                season: event.target.value
            }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(form.name === '' && form.duration === '' && form.difficulty === ''  && form.season === '' && form.season === '' && form.countries === '') return alert('Incomplete fields, please complete all fields')
        dispatch(postActivity(form))
        // alert("Activity created successfully")
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [],
        })
    }
// TODO: DELETE COUNTRIES
    const deleteCountry = (event) => {
        setForm({
            ...form,
            countries: form.countries.filter((country) => country !== event.target.value)
        })
        setErrors(validation({
            ...form,
            countries: form.countries.filter((country) => country !== event.target.value)
        }))
    }
// TODO: CATCH
    const handleErrors = (event) => {
        event.preventDefault();
        setErrors(validation({
            ...form, 
            countries: [...form.countries, event.target.value]
        }))
        handleSubmit(event)
    }
    
    const disabled = (form.name === "" || form.difficulty === "" || form.duration === "" || form.season === "" || form.countries.length === 0)
    
    
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])


    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>

                <h1>Create your tourist activity</h1>

                {/** NOMBRE */}

                <div className={styles.inputsContainer}>
                    <div>
                        <label>Name </label>
                    </div>
                    <input className={styles.inputs} type="text" onChange={handleChange} value={form.name} name="name" placeholder="Activity name"/>
                    {errors.name && <p className={styles.errors}>{errors.name}</p>}
                </div>

                    {/* DIFFICULTY */}

                <div className={styles.inputsContainer}>
                    <div>
                        <label>Difficulty </label>
                    </div>
                    <input className={styles.inputs} type="text" onChange={handleChange} value={form.difficulty} name="difficulty" placeholder="From 1 to 5"/>
                    {errors.difficulty && <p className={styles.errors}>{errors.difficulty}</p>}
                </div>

                    {/* DURATION */}

                <div className={styles.inputsContainer}>
                    <div>
                        <label>Duration </label>
                    </div>
                    <input className={styles.inputs} type="text" onChange={handleChange} value={form.duration} name="duration" placeholder="Enter the duration in hours (1hs)"/>
                    {errors.duration && <p className={styles.errors}>{errors.duration}</p>}
                </div>

                {/* SEASON */}

                <div className={styles.checkDiv}>
                        <select className={styles.selectCountry} onChange={handleSeasons}>
                            <option className={styles.seasons} value="empty">Select season</option>
                            <option value="summer">Summer</option>
                            <option value="autumn">Autumn</option>
                            <option value="winter">Winter</option>
                            <option value="spring">Spring</option>
                        </select>
                        {errors.season && <p className={styles.errors}>{errors.season}</p>}
                </div>
                {/* COUNTRIES */}
                <select 
                className={styles.selectCountry} 
                value={selected} 
                onChange={event => [handleCountries(event),
                setSelected(event)]}>
                    <option>Select Country</option>
                    {countriesList?.map(country => {
                        return(
                            <option key={country.name}>
                                {country.name}
                            </option>
                        )
                    })}
                </select>
                    {errors.countries && <p className={styles.errors}>{errors.countries}</p>}
                
                    {/* DELETE COUNTRY  */}
                
                
                    <div>
                        {form.countries.map((country) => {
                            return(
                                <div className={styles.divBtn} key={country}>
                                    <p>{country}</p>
                                    <button className={styles.buttonDelete} onClick={deleteCountry} value={country}> X </button>
                                </div>
                            )
                        })}
                    </div>
                    
                    {/* END OR CATCH ERRORS */}
                    
                    <div>
                        <button className={styles.button} 
                        type="submit" 
                        disabled={disabled ||
                            errors.name ||
                            errors.difficulty || 
                            errors.duration || 
                            errors.countries ||
                            errors.season} 
                            onClick={handleErrors}>Create Actvitiy</button>
                    </div>
                </form>
        </div>
)
}


export default Form;