import Calendario from "../Components/Calendario"
import ItemDescripcion from "../Components/ItemDescripcion"
import Mapa from "../Components/Mapa"
import Mosaico from "../Components/Mosaico"

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