import Alojamiento from "../Pages/Alojamiento"
import Home from "../Pages/Home"
import Iniciar from "../Pages/Iniciar"
import Mensajes from "../Pages/Mensajes"
import Perfil from "../Pages/Perfil"

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