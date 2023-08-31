import Calendario from "../Components/Calendario"
import ItemDescripcion from "../Components/ItemDescripcion"
import ItemPersona from "../Components/ItemPersona"
import Mapa from "../Components/Mapa"
import Mosaico from "../Components/Mosaico"
import NavBar from "../Shared/NavBar"

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