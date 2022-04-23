import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/authContext"
import { LoginScreen } from "../components/login/LoginScreen"


export const PublicRoutes = () => {

    const {session_id} = useContext(AuthContext)


  return session_id.logged===false ? <LoginScreen/> : <Navigate to="/"/>

}
