import Input from "../Components/Input"
import Button from "../Components/Button"
import {  useLocation, useNavigate} from "react-router";
import { db , ref , set  } from "../Firebase/Firebase";
import {useState} from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useSelector } from "react-redux";
// import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';

const BookingForm = () => {
    
    const Navigate = useNavigate()
    const location = useLocation()
    const id = location.state.data
    const img = location.state.img
    console.log(location.state)

    const [name,setName] = useState("")
    const [cnic,setCnic] = useState("")
    const [address,setAddress] = useState("")
    const [number,setNumber] = useState("")
    const [booking,setBooking] = useState([])
    // const [hotelId,sethotelId] = useState("")
    const state = useSelector(state => state)
    console.log(state)

    const  submit = (e) => {

        e.preventDefault()
        const uid = state.LoginRedu.uid
        console.log(uid)


        let bookObj ={
            name,
            cnic,
            address,
            number,
            id,
            img
        }
        
        let arr= []

        const refrence = ref(db, `/HOTEL BOOKING/${uid}`);
        
        arr.push(set(refrence, bookObj))
        setBooking([...arr])

        alert("Booking SucessFully---!")

        Navigate("/")

    }
    
    // console.log(booking)

    return (
        <div style={{width:"70%",margin:"0 auto"}}>
                           <h1 style={{textAlign:"center",fontSize:"25px",fontWeight:"bold"}}>Hotel Booking Form</h1>
                <form onSubmit={(e) => submit(e)}> 

                <div className="input_wrapper">
                      <DriveFileRenameOutlineIcon className="icon"/>
                        <Input 
                             placeholder="Enter Your Name"
                             type="text"
                             onChange={(e) => setName(e.target.value)}
                        />
                    </div>


                    <div className="input_wrapper">
                        <VisibilityOutlinedIcon className="icon"/>
                        <Input 
                                 placeholder="CNIC No"
                             type="tel"
                             onChange={(e) => setCnic(e.target.value)}
                        />
                    </div>


               
                    <div className="input_wrapper">
                    <DriveFileRenameOutlineIcon className="icon"/>
                        <Input 
                             placeholder="Your Address"
                             type="address"
                             onChange={(e) => setAddress(e.target.value)}
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


                   


                    <div className="btn">
                    <Button 
                         value="Submit"

                        
                    />
                    </div>

                </form>
        </div>
    )
}

export default BookingForm
