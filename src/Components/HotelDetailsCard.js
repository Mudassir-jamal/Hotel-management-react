import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from "../Components/Button"
import { useNavigate } from 'react-router';
import "../cssFiles/home.css"

export default function HotelDetailsCard(props) {
    // console.log(props)
    const {img,tittle,address,btn,price,person,details,id} = props
    const navigate = useNavigate()
    
    const dataSend = (id,img) => {
    //    console.log(id)

    let obj = {
        data : id,
        img : img,
    }

    navigate("/BookingForm" ,{state :  obj})

   }

  const theme = useTheme();

  return (
      <div className="DetailsCard_main">

    <Card className="DetailsCard" sx={{ display: 'flex',width:"80%"}}>
<CardMedia
  component="img"
  sx={{ width: 251 }}
  image={img}
  alt="Live from space album cover"
/>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {tittle}
          </Typography>
          <Typography className="DetailsCard_address" variant="subtitle1" color="text.secondary" component="div">
            <h4> {address} </h4>
          </Typography>
          <Typography >
            <h5> {details} </h5>
          </Typography>
        
          <h2>{price}</h2>
          <span>*{person}*</span>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 ,float:"right"}}>
          <IconButton aria-label="previous">
          <button onClick={() => dataSend(id,img)}>{btn}</button>
          </IconButton>
        </Box>
      </Box>
    </Card>
  </div>
  );
}
