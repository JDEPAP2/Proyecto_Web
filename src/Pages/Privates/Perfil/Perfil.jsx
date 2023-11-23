import { CardInfo, CardPersona, IconPanelBoton } from "../../../Components"
import './Perfil.css'

export const Perfil = () => {
    return (
      <>
        <h1>Perfil</h1>
        <hr></hr>
        <br></br>
        <div className="contain">
          <CardInfo/>
          <CardPersona/>
        </div>
      </>
    )
}