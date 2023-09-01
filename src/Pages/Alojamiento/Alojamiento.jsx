import Calendario from "../../Components/Calendario/Calendario"
import ItemDescripcion from "../../Components/ItemDescripcion/ItemDescripcion"
import Mapa from "../../Components/Mapa/Mapa"
import Mosaico from "../../Components/Mosaico/Mosaico"
import NavBar from "../../Shared/NavBar/NavBar"
import ItemPersona from "../../Components/ItemPersona/ItemPersona"

const Alojamiento = () => {
    return (
      <>
        <h2>Alojamiento</h2>
        <NavBar/>
        <Mosaico/>
        <Mapa/>
        <Calendario/>
        <ItemDescripcion/>
        <ItemPersona/>
      </>
    )
  }
  export default Alojamiento