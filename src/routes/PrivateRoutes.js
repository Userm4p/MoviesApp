import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { AuthContext } from "../auth/authContext"
import { PublicRoutes } from "./PublicRoutes"


export const PrivateRoute = ({children}) => {

    const {session_id} = useContext(AuthContext)
    const location = useLocation();

    localStorage.setItem('lastPath', location.pathname)


  return session_id.logged 
    ? children 
    : <PublicRoutes/>
}
