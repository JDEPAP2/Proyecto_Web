import { useNavigate } from "react-router-dom"
import Image from "../../Media/place.jpg"
import './ItemAlojamiento.css'

export const ItemAlojamiento = ({nombre}) => {
    const navigate = useNavigate()
    return (
      <>
        <div className="contn" onClick={()=> navigate("housing/1", {replace: true})}>
          <img className="imgPlace" src={Image}></img>
          <p className="label">{nombre}</p>
          <p className="label2">Direccion</p>
        </div>
      </>
    )
}
  
