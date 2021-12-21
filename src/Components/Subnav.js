import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import "../cssFiles/home.css"
import NavBarNew from './Nav&Footer/NavMui';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useSelector } from 'react-redux';
import Signout from './Signout';




const Subnav = () => {
    const navigate = useNavigate()
    const state = useSelector(state => state)
    const goToLogin = () => {
        navigate("/login");
      };
    
      const goTosignUp = () => {
        navigate("/signup");
      };

  return (<>
      <NavBarNew />
  
    <AppBar position="static" className="subNav_main" style={{backgroundColor:"white",
    color:"black" ,
    width:"95%" ,
    display:"flex",
    margin:"0 auto",
    boxShadow:"none"
}}>



        <div className="subNav_contai">

            <div className="subNAv_firstSide">

            <div>
           <PhoneAndroidIcon />
           <h4>+92-01-2671774</h4>
           </div>
                
           <div>

           <MailOutlineIcon />
           <h4>JamalMudassir65@gmail.com</h4>

           </div>
           </div>


        <div className='subNAv_secondSide'>
            {state.LoginRedu.name ?(
                <div>
                 <div className='login_btns_false'>
                  <div> <b> WELCOME : {state.LoginRedu.name} </b>  </div>
                    <div><Signout /></div>
                
              </div>
              </div>
            ) : (
                 

                 
                <div className="log_sign_btn">
                <Button value="Goto Login" onClick={goToLogin} />
                <Button value="Goto SignUp" onClick={goTosignUp} />
                
                </div>
                
            )}
        </div>

         
           
        </div>
    </AppBar>
        </>
  );
};
export default Subnav;
