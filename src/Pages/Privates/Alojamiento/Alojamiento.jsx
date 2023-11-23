import {ItemPersona,Mosaico,Mapa,ItemDescripcion,Calendario } from "../../../Components"
import Image from "../../../Media/place.jpg"
import './Alojamiento.css'


export const Alojamiento = () => {
    return (
      <>
        <img className="imgMarc" src={Image}></img>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/>
        <h1>Alojamiento</h1>
        <hr></hr>
        <Mosaico/>
        <Mapa/>
        <Calendario/>
        <ItemDescripcion/>
        <ItemPersona/>
      </>
    )
  }
Alojamiento