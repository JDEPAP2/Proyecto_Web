import Image from "../../Media/place.jpg"
import './ItemAlojamiento.css'

export const ItemAlojamiento = ({nombre}) => {
    return (
      <>
        <div className="cont">
          <img src={Image}></img>
          <p className="label">{nombre}</p>
          <p className="label2">Direccion</p>
        </div>
      </>
    )
}
  
