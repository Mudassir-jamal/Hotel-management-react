// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
// import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import "../cssFiles/login&signup.css"
import {useState} from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import Loader from "react-loader-spinner"
import { useDispatch } from 'react-redux';
import { SignUpFun } from "../Redux-config/Action";
import { useNavigate } from 'react-router';

export const SignUp = () => {

    const [name,setName] = useState("")
    const [pass,setPass] = useState("")
    const [Email,setEmail] = useState("")
    const [number,setNumber] = useState("")
    // const [location,setLocation] = useState("")


    const [loader,setloader] = useState(false)


     const dispatch =  useDispatch()
     const Navigate = useNavigate()
   


    const Signupfn = (e) => {
        e.preventDefault();

        let obj = {
            Email,
            pass,
            name,
            number,
            category:'customer'
        }

         dispatch(SignUpFun(obj,Navigate,setloader))
        //  Navigate("/")

        

    }

    // console.log(loader)

    return (
        <div className="signup_main" >
            {loader ? loader : (<>

                <div>
                <h1>Sign up</h1>
                <form onSubmit={(e) => Signupfn(e)}> 

                <div className="input_wrapper">
                      <DriveFileRenameOutlineIcon className="icon"/>
                        <Input 
                             placeholder="Enter UserName"
                             type="text"
                             onChange={(e) => setName(e.target.value)}
                        />
                    </div>


                    <div className="input_wrapper">
                        <VisibilityOutlinedIcon className="icon"/>
                        <Input 
                             placeholder="Enter email"
                             type="email"
                             onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>


               
                    <div className="input_wrapper">
                    <LockOutlinedIcon className="icon"/>
                        <Input 
                             placeholder="Enter Password"
                             type="password"
                             onChange={(e) => setPass(e.target.value)}
                        />
                    </div>


                    <div className="input_wrapper">
                        <LocalPhoneOutlinedIcon className="icon"/>
                        <Input 
                             placeholder="Phone Number"
                             type="tel"
                             onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>


                    {/* <div>
                       <select>
                           <option></option>
                       </select>
                    </div> */}


                    <div className="btn">
                    <Button 
                         value="SignUp"
                        
                    />
                    </div>

                </form>


             
        
                 <div className="link"> 
                   
                <Link to="/login">login</Link>


                 </div>
                
            </div>
            </>)}

             
           <Loader type="ThreeDots" 
           color="blue" 
           height={120}
           width={120}
           visible={loader}
           secondaryColor="Grey"
           />
        </div>
    )
}
