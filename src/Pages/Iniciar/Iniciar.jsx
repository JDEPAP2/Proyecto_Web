import { useState } from "react"
import {IconPanelBoton} from "../../Components"
import image from "../../Media/background.jpg"
import './Iniciar.css'
import { UserContext } from "../../Context/UserContext"
import { useNavigate } from "react-router"
import { useContext } from "react"

export const Iniciar = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const lastPath = localStorage.getItem('lastPath') || "user"
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    
    const onLogin = () => {
        setUser({
            id: new Date().getTime(),
            email: email,
            userName: "JDEPAP2"
        });
        setTimeout(()=>navigate(lastPath, {
            replace: true
        }),500)
        
    }

    return (
      <>
        <h1>Iniciar</h1>
        <hr></hr>
        <div className="Cont">
          <img src={image}></img>
        </div>
        <div>
          <p>Correo</p>
          <input type="text" value={email} onChange={v=>setEmail(v.target.value)}/>
          <p>Contraseña</p>
          <input type="password" value={pass} onChange={v=>setPass(v.target.value)}/>
          <br></br>
          <br></br>
          <button onClick={()=> onLogin()}>Iniciar</button>
        </div>
      </>
    )
}