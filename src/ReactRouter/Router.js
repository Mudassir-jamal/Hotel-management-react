import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import {Home,About,Dashboard, Login, SignUp, KarachiHotelDetails,BookingForm,SingalUserBooking,LahoreHotelDetails} from "./index";




function AppRouter({user}) {
  // const  navigate = useNavigate()
  // if(user) {
  //   console.log("alskdnlakx")
  // }
  // else(
  //    <Login />
  // )
  
  return (
    <Router>
  
      <Routes>
        
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/BookingForm" element={<BookingForm />} />
        <Route path="/SingalUserBooking" element={<SingalUserBooking />} />
        <Route path="/KarachiHotelDetails" element={<KarachiHotelDetails />} />
        <Route path="/LahoreHoteldetails" element={<LahoreHotelDetails />} />



      </Routes>

    </Router>
  );
}


export default AppRouter