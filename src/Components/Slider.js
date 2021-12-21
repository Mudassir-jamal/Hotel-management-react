import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=',
    caption: 'Slide 1',
    Height : "2229px"
  },
  {
    url: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://icms-image.slatic.net/images/ims-web/a55a1eb5-e80c-4f3a-8513-fb11e085244d.jpg_1200x1200.jpg',
    caption: 'Slide 3'
  },
];

const Slider = () => {
    return (
      <div className="slide-container" style={{height:"350px",margin:"4rem auto", width:"90%"}}>
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})` ,backgroundRepeat:"no-repeat",height:"400px",width:"100%" ,backgroundSize:"cover"}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}


export default Slider