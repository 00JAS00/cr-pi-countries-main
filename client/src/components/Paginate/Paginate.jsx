import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../Redux/Actions/Actions";
import izquierda from "../../assets/izquierda.png"
import derecha from "../../assets/derecha.png"
import styles from "./Paginate.module.css"

const Paginate = ({cantPages}) => {
    const { page } = useSelector((state) => state)
    const dispatch = useDispatch()
    const next = () => {
        dispatch(nextPage())
    }

    const prev = () => {
        dispatch(prevPage())
    }


    return(
        <div className={styles.paginate}>
        
            {
                page > 1 ? (
                    <div className={styles.numbersPage}>
                        <img className={styles.btnPages} src={izquierda} onClick={prev}/>
                        <p className={styles.numberP}>{page -1}</p>
                    </div>
                ) : null
            }

            <h2 className={styles.pagActive}>{page}</h2>
            
            {
                page < cantPages ? (
                    <div className={styles.numbersPage}>
                        <p className={styles.numberP}>{page +1}</p>
                        <img className={styles.btnPages} src={derecha} onClick={next}/>             
                    </div>

                ) : null
            }
            
        </div>
    )
}

export default Paginate;