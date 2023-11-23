import { Routes, Route } from "react-router-dom"
import { NavBar } from "../Shared/NavBar/NavBar"
import { UserRoutes } from "./UserRoutes"
import { Iniciar, Nosotros, Handle404, PrivateRoutes } from '../Pages'

export const HandleRoutes = ()=>{

    return <>
        <NavBar/>
        <Routes >
            <Route path="/" element={<Iniciar/>}/>
            <Route path="about" element={<Nosotros/>}/>
            <Route path="user/*" element={
                <PrivateRoutes>
                    <UserRoutes/>
                </PrivateRoutes>
            }/>
            <Route path="/*" element={<Handle404/>}/>
        </Routes>
    </>
}