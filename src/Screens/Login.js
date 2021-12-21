import { useState } from "react";
import { Link ,} from "react-router-dom";
import { useNavigate } from "react-router";
import Button from "../Components/Button";
import Input from "../Components/Input";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Loader from "react-loader-spinner";
import { LoginFirebase } from "../Redux-config/Action";
import { useDispatch } from "react-redux";
import SocialIcons from "../Components/SocialIcons";
// import Navbar from "../Components/Nav&Footer/Navbar"
import img from "../Assets/login.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
 

  const [loader,setloader] = useState(false)

  const Navigate = useNavigate()
   const dispatch =  useDispatch()


  const loginFn = (e) => {
    e.preventDefault();

    let category = "User"

    let obj = {
      email,
      pass,
      category
    };

    dispatch(LoginFirebase(obj,Navigate,setloader))


  };

  return (
    <div className="Main_page_Login">
      {loader  ? 
      
       <div style={{margin:"7rem auto",width:"25%"}}>
         
             <Loader type="ThreeDots" 
              color="#00BFFF" 
               height={220}
                width={220}
                visible={loader}
           /> 

           </div>
           
           
           :(<> 
           <div className="Login_main">
             <div className="portion1">
            
            <h1>LOGIN</h1>
      <div>
        <form onSubmit={(e) => loginFn(e)}>
          <div className="input_wrapper"> 
            <DriveFileRenameOutlineIcon className="icon" />

             <Input
                 placeholder="Enter email"
                 type="email"
                 onChange={(e) => setEmail(e.target.value)}
                 />
          </div>

          <div className="input_wrapper">
          <VisibilityOutlinedIcon className="icon" /> 
            <Input
              placeholder="Enter Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
              />
          </div>
         
          <div className="btn">
                    <Button 
                         value="Login"
                         
                         />
                    </div>

        </form>

        <div className="link">

         <span>Dont have an Account ?</span><strong><Link to="/signUp">Register</Link></strong>
         
        </div>
        </div>
         
       <SocialIcons/>
           
      </div>

      <div className="portion2">
        <h1>Welcome Back</h1>
        <p>Lorem ipsum is placeholder text commonly us, print, and publishing industries for previewing layouts and visual mockups.</p>

        <div>
          <img src={img} height="400" alt="svg"/>
        </div>
      </div>



      
      </div>
           </>)}
    </div>
  );
};

export default Login;
