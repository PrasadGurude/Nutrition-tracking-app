import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { Navigate, useNavigate } from "react-router-dom"
useNavigate


export default function Header(parms) {

    const navigate=useNavigate()

    const loggedData = useContext(UserContext)

    function logout() {
        localStorage.removeItem("nutrify-user")
        loggedData.setLoggedUser(null)
        navigate("/login")
    }
    function home(){
        navigate("/track")
    }

    return(
        <div>
           <ul>
            <li onClick={home}>Home</li>
            <li onClick={logout}>Logout</li>
           </ul>
        </div>
    )
};
