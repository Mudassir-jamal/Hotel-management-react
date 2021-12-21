import { Card , Avatar} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react'
// const { Meta } = Card;

const SingleCard = (props) => {

  const {img,tittle,hotel} = props
    return (
        <div>
             <>
             <div style={{width:"auto",position:"relative",boxShadow: "-2px 3px 14px -1px rgba(0,0,0,0.52)"  
}}>
               <img src={img} alt="img"/>

               <div style={{position:"absolute",bottom:"20px",left:"0.3rem"}}>

               <h1 style={{color:"white",
                           fontWeight:"bold",
                           textShadow:"2px -1px 4px black",
                           fontSize:"1.4rem"

              
              
              }}>{tittle}</h1>
               <mark style={{backgroundColor:"#F39C12",
                             color:"white",
                             fontWeight:'bold',
                             margin:"-1rem -0.3",
                             width:'150px',
                             padding:"8px 20px 8px 20px",
                             borderRadius:"10px"
                             

               }}>{hotel}</mark>
               </div>
             </div> 
 
  
  </>
        </div>
    )
}

export default SingleCard
