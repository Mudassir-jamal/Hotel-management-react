
import { useNavigate } from "react-router"
import Button from "../Components/Button"
import { logout } from "../Redux-config/Action"
import { useDispatch } from "react-redux"
import "../cssFiles/home.css"


const Signout = ( ) => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const logOutfn = () => {
        
        dispatch(logout(Navigate))

    }


    return(
           <Button  className="log_out" onClick={logOutfn} value="Log Out-!"/> 

        )
}


export default Signout