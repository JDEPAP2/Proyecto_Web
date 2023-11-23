import { useState } from "react"
import {IconPanelBoton} from "../../Components"
import image from "../../Media/background.jpg"
import './Iniciar.css'

export const Iniciar = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
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
          <button>Iniciar</button>
        </div>
      </>
    )
}