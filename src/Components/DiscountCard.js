import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DiscoundtCard(props) {
    // console.log(props)
    const {img,tittle,text,btn,price,icon} = props
  return (
    <Card sx={{ maxWidth: 345 }} style={{ "&:hover": {
        transform:"scale(1.1)"
      },boxShadow: "-2px 3px 8px -1px rgba(0,0,0,0.52)"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontWeight:"600"}}>
          {tittle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span><img src={icon} /></span>{text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{btn}</Button>
        <Button size="small">{price}</Button>
      </CardActions>
    </Card>
  );
}
