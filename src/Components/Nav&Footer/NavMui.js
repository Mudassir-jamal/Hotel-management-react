// let {BrowserRouter,Switch,Route,NavLink} = ReactRouterDOM;
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../cssFiles/nav.css"
import {useSelector} from "react-redux"
import AdminDashboard from "../AdminDashboardBtn"




export default function NavBarNew() {
  const [click, setClick] = useState(false);
  const state = useSelector(state => state)

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img src="https://batoota.pk/assets/images/logo/batoota_logo_dark.png" height="60" />
            <i className="fa fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              {state.LoginRedu.uid == "SI5qBG5RmPXWdFwM8dgUHap97EE2" ? <>
              
              <AdminDashboard />
              </>:
              <NavLink
                exact
                to="/SingalUserBooking"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                My Bookings
              </NavLink>
              }

            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}
// function App() {
  
//   return (
//     <>
     
//        <BrowserRouter>
//         <NavBar />

//         <div className="pages">
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/blog" component={Blog} />
//             <Route path="/contact" component={Contact} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

