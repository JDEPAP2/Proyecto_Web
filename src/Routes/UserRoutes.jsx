import { Routes, Route } from "react-router-dom"
import { Home, Perfil, Alojamiento, CrearAlojamiento, Favoritos, Mensajes, MisAlojamientos, Reservar } from "../Pages"

export const UserRoutes = ()=>{
    
    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path=":username" element={<Perfil/>}/>
            <Route path="housing/:id" element={<Alojamiento/>}/>
            <Route path="create" element={<CrearAlojamiento/>}/>
            <Route path="favorites" element={<Favoritos/>}/>
            <Route path="messages" element={<Mensajes/>}/>
            <Route path="myHousings/:id" element={<MisAlojamientos/>}/>
            <Route path="reserve/:id" element={<Reservar/>}/>
        </Routes>
    </>
}