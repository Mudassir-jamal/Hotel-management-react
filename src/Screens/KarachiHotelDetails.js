import React from 'react'
import InputMui from "../Components/InputMui"
import HotelDetailsCard from '../Components/HotelDetailsCard'
import "../cssFiles/home.css"

const data = [
    {
     id : "No 1 & ZIFAN HOTEL AND SUITES",
     img: "	https://batoota.pk/assets/countries/pk/property-images/238/zifan-hotel-and-suites-1.jpg",
     tittle: "ZIFAN HOTEL AND SUITES",
     address : " 29 B, Block 6, PECHS",
     btn : "BOOK Now",
     price :"Starring From PKR 10,649",
     person : "(1 nignt , 1 Person)",
     details:"Situated in the PECHS district of Karachi, Zifan Hotel &amp; Suites features a fitness centre, a ga..."
},
{   
    id : "No 2 & ELEGANCE 1",
    img: "https://batoota.pk/assets/countries/pk/property-images/220/elegance--1-2.jpg",
    tittle: "ELEGANCE 1",
    address : " 29 B, Block 6, PECHS",
    btn : "BOOK Now",
    price :"Starring From PKR 10,649",
    person : "(1 nignt , 1 Person)",
    details:"Situated in the PECHS district of Karachi, Zifan Hotel &amp; Suites features a fitness centre, a ga..."
},
{
    id : "No 3 & Blue Sky ",
    img: "https://batoota.pk/assets/countries/pk/property-images/223/blue-sky-executive-suite-1-2.jpg",
    tittle: "Blue Sky   ",
    address : " 29 B, Block 6, PECHS",
    btn : "BOOK Now",
    price :"Starring From PKR 10,649",
    person : "(1 nignt , 1 Person)",
    details:"Situated in the PECHS district of Karachi, Zifan Hotel &amp; Suites features a fitness centre, a ga..."
},
{
    id : "No 4 & ZIFAN HOTEL",
    img: "	https://batoota.pk/assets/countries/pk/property-images/238/zifan-hotel-and-suites-1.jpg",
    tittle: "ZIFAN HOTEL AND SUITES",
    address : " 29 B, Block 6, PECHS",
    btn : "BOOK Now",
    price :"Starring From PKR 10,649",
    person : "(1 nignt , 1 Person)",
    details:"Situated in the PECHS district of Karachi, Zifan Hotel &amp; Suites features a fitness centre, a ga..."
},


]


const KarachiHotelDetails = () => {
    return (<>

     {/* <InputMui datas={data} /> */}
        <div style={{marginTop:"10rem"}}>
            
        
          <div className="karachi_heading">
         
            <h1>Hotels In Karachi</h1>

          </div>

            {data.map(e => {
                return(
                    <HotelDetailsCard 
                      img = {e.img}
                      tittle = {e.tittle}
                      address = {e.address}
                      btn = {e.btn}
                      price = {e.price}
                      person = {e.person}
                      details = {e.details}
                       id = {e.id}


                    />
                    
                )
            })}
        </div>
        </>
    )
}

export default KarachiHotelDetails

