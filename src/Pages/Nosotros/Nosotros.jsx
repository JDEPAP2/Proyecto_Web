import {IconPanelBoton} from "../../Components"
import './Nosotros.css'
import image from "../../Media/profile.png"


export const Nosotros = () => {
    return (
      <>
        <h1>Nosotros</h1>
        <hr></hr>
        <h4>Laura Camila Riascos Hernandez - Jose David Escobar Prada</h4>
        <div className="cont">
          <img src={image}></img>
          <br></br>
          <img src={image}></img>
        </div>
      </>
    )
}