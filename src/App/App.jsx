import Alojamiento from "../Pages/Alojamiento/Alojamiento"
import Home from "../Pages/Home/Home"
import Iniciar from "../Pages/Iniciar/Iniciar"
import Mensajes from "../Pages/Mensajes/Mensajes"
import Perfil from "../Pages/Perfil/Perfil"

const App = () => {
  return (
    <>
      <h1>App</h1>
      <Home/>
      <Perfil/>
      <Alojamiento/>
      <Iniciar/>
      <Mensajes/>
    </>
  )
}
export default App