import { CircularProgress } from "@mui/material"
import styles from "./Redirect.module.css"
import { useNavigate } from "react-router"

export const Redirect = ()=>{
    const navigate = useNavigate()

    setTimeout(()=>navigate("/", {replace: true}), 5000)

    return <>
        <div className={styles.container}>
            <h1>Redirecting</h1>
            <CircularProgress thickness={10} color="warning"/>
        </div>
        <div>
            <p className={styles.info}>No hay ninguna sesion activa</p>
            <p className={styles.message}>Rediringiendo a la ventana de inicio</p>
        </div>
    </>
}