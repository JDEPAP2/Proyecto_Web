import { useContext, useEffect } from "react"
import { UserContext } from "../../Context/UserContext"
import { useLocation } from "react-router"
import { Redirect } from "../Redirect/Redirect"

export const PrivateRoutes = ({children}) => {
    const { pathname, search } = useLocation();

    const path = pathname+search;
    localStorage.setItem('lastPath',path??"/")
        
    return localStorage.getItem('user')? children : <Redirect/>
}