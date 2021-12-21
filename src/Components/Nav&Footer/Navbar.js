import Signout from "../Signout"
import "../../cssFiles/nav.css"
import { useSelector } from "react-redux"

const Navbar = () => {
    
   
    const state = useSelector(state => state)
    
    return (
        <div className="main_nav">
            <div className="leftSide_nav">
               
                
            </div>
        </div>
    )
}

export default Navbar
