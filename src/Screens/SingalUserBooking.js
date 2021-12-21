import React from 'react'
import { useState ,useEffect } from 'react';
import { db,ref,onValue, } from '../Firebase/Firebase';
import { useSelector } from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Loader from 'react-loader-spinner';


const SingalUserBooking = () => {

    const [data,setData] = useState([])
    const [loader,setloader] = useState(false)

    const state = useSelector(state => state)

    let uid = state.LoginRedu.uid
  
      
    useEffect(() => {
        setloader(true)
        
        const refrence = ref(db, `/HOTEL BOOKING/${uid}`);
        let arr =[]
       onValue(refrence, (snapshot) => {
          if (snapshot.exists()) {
          arr.push(snapshot.val())
          setData([...arr]);
          
        }
        setloader(false)
    }

        )
    },[state])
    
        console.log(data)


          


// bookings()


    return (    
        <div>
            <div>
              

                {loader ?  <div style={{margin:"7rem auto",width:"25%"}}>
         
         <Loader type="ThreeDots" 
          color="#00BFFF" 
           height={220}
            width={220}
            visible={loader}
       /> 

       </div>  

       : (<>

                <Table border="1" style={{
                                     width:"70%",
                                     margin:"5rem auto",
                                     textAlign:"center",   }}>
      <Thead style={{backgroundColor:"black",color:'white',fontWeight:'bold',height:"60px"}}>
        <Tr>
          <Th>NAME</Th>
          <Th>NUMBER</Th>
          <Th>CNIC</Th>
          <Th>ADDRESS</Th>
          <Th>Hotel Id</Th>
          <Th>Hotel Img</Th>



        </Tr>
      </Thead>
      <Tbody>
          {
              data.map((d,i) => {
                  return(
                      <Tr style={{backgroundColor:"lightgray",fontWeight:"bold"}}>
                          <Td>{d.name}</Td>
                          <Td>{d.number}</Td>
                          <Td>{d.cnic}</Td>
                          <Td>{d.address}</Td>
                          <Td>{d.id}</Td>
                          <Td><img src={d.img}  height="100" /></Td>



                      </Tr>
                  )
              })
          }
        
      </Tbody>
    </Table>
       </>)
       }
            </div>
            
            
        </div>
    )
}

export default SingalUserBooking;
