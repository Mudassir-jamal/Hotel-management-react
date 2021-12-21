import Button from "../Components/Button";
import React from "react";
import "../cssFiles/home.css";
import { useNavigate } from "react-router";
import Subnav from "../Components/Subnav";
import Slider from "../Components/Slider";
import "react-slideshow-image/dist/styles.css";
import SingleCard from "../Components/SingleCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DiscoundtCard from "../Components/DiscountCard";
import AdminDashboardBtn from "../Components/AdminDashboardBtn"
// import SingalUserBooking from "./SingalUserBooking";
// import DateTime from "../Components/DateTime.js"

const Home = (props) => {
    
    const navigate = useNavigate();
    const state = useSelector(state => state)
    const {user } = props
  console.log(user)

//   if(user ){
//       console.log("han")
//   }
//   else{
//       navigate("/login")
//   }

  // const goToLogin = () => {
  //   navigate("/login");
  // };

  // const goTosignUp = () => {
  //   navigate("/signup");
  // };

  const book = () => {
    navigate("/SingalUserBooking");
  };

  return (
    <div>
      <div>
        <Subnav />
      </div>
      <div id="bg_img">
        <div className="bg_img_contai">
          <h1>Spend Quality Holidays With Us</h1>
          <p>
            Lorem Ipsum is simply text of the Lorem Ipsum is simply my text of
            the printing and Ipsum is simply.
          </p>

          <div>

          <button>RESERVE NOW</button>
          
          </div>
        </div>
      </div>

         


      <div>
        <Slider />
      </div>

      <div className="popular_head_Div">
        <img
          src="https://batoota.pk/assets/images/homepage_assets/homepage_icons/popular_destinations.png"
          alt="logo"
        />
        <h1 className="popular_head">POPULAR DESTINATION </h1>
      </div>

      <div className="first_card_kr_lr_is" >
        <Link  to="./KarachiHotelDetails">
        
          <SingleCard
            img="https://batoota.pk/assets/countries/pk/cities/2020071615202020030215275dd2b04943c77GyGP6H7OBp.jpg
                  "
            tittle="KARACHI"
            hotel="42 Hotels"
          />
        </Link>

        <Link  to="/LahoreHotelDetails">
          <SingleCard
            img="https://batoota.pk/assets/countries/pk/cities/2020071615052020030215095e4fcb9cd8c090W2JR87tr4.jpg"
            tittle="ISLAMABAD"
            hotel="30 Hotels"
          />
        </Link>

        <Link  to="/LahoreHotelDetails" >
        <SingleCard
          img="https://batoota.pk/assets/countries/pk/cities/2020071615352020030215125dd2b4b258dbcjiGqtKrwi7.jpg
               "
          hotel="22 Hotels"
          tittle="LAHORE"
        />

        </Link>
      </div>

      <div>
        <div className="Discount_card">
          <img
            src="https://batoota.pk/assets/images/homepage_assets/homepage_icons/featured_hotels.png"
            alt="log0"
          />
          <h1>DISCOUNTED HOTELS</h1>
        </div>

        <div className="Discount_cards">
          <DiscoundtCard
            className="disc_crd"
            img="https://batoota.pk/assets/countries/pk/property-images/37/20200629155668273837_2597591306932129_7489093349723340800_n.jpg"
            tittle="Hotel Mountain Lodge"
            icon="	https://batoota.pk/assets/batootapk/images/HomeImages/map-pin.svg"
            text="Satpara Road Skardu City view point"
            btn="View On Map"
            price="Rs : 7,000"
          />

          <DiscoundtCard
            className="disc_crd"
            img="https://batoota.pk/assets/countries/pk/property-images/33/continental-guest--house-6.jpg  "
            tittle="Continental Guest  House"
            icon="	https://batoota.pk/assets/batootapk/images/HomeImages/map-pin.svg"
            text="Hotel Summit Restaurant, Skardu"
            btn="View On Map"
            price="Rs : 10,000"
          />

          <DiscoundtCard
            className="disc_crd"
            img="https://batoota.pk/assets/countries/pk/property-images/29/hotel-summit-skardu-1.jpg"
            tittle="Hotel Summit Skardu"
            icon="	https://batoota.pk/assets/batootapk/images/HomeImages/map-pin.svg"
            text="Hotel Summit & Restaurant, Skardu"
            btn="View On Map"
            price="Rs : 7,000"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
