import Calendario from "../../Components/Calendario/Calendario"
import ItemDescripcion from "../../Components/ItemDescripcion/ItemDescripcion"
import Mapa from "../../Components/Mapa/Mapa"
import Mosaico from "../../Components/Mosaico/Mosaico"

const Alojamiento = () => {
    return (
      <>
        <h2>Alojamiento</h2>
        <Mosaico/>
        <Mapa/>
        <Calendario/>
        <ItemDescripcion/>
      </>
    )
  }
  export default Alojamiento