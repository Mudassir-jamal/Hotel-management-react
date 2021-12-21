import Signout from "../Components/Signout"
import { useState,useEffect } from "react"
import { db,ref,onChildAdded,remove } from "../Firebase/Firebase"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Loader from "react-loader-spinner";

const Dashboard = () => {

    const [listUser, setUserList] = useState([])
    const    [booking, setBooking] = useState([])
    const [loader, setloader] = useState(true)




    
    useEffect(() => {


        const data = () => {

            setloader(true)
            
            let refrence = ref(db, "users/");
            let arr = [];
            onChildAdded(refrence, (snapshot) => {
                if (snapshot.exists()) {
            arr.push(snapshot.val());
            setUserList([...arr]);
        }
        });
        
        
        let refrenc = ref(db, "HOTEL BOOKING/");
        let arr1 = [];
        onChildAdded(refrenc, (snapshot) => {
            if (snapshot.exists()) {
                arr1.push(snapshot.val());
                setBooking([...arr1]);
            }
        });
        setloader(false)
    }

    data()
    },[])
    
    
    // console.log(listUser,booking)
    
    const deleteUser = (id) => {
        const refrence = ref(db, "users/" + id);
        remove(refrence);
      };

    return (
        <div>
            <h1 style={{fontWeight:"bold",textAlign:"center"}}>ADMIN DASHBOARD</h1>
            {/* <button onClick={getData}>get all users</button> */}
            <Signout  />

            {loader  ? 
      
      <div style={{margin:"7rem auto",width:"25%"}}>
        
            <Loader type="ThreeDots" 
             color="#00BFFF" 
              height={220}
               width={220}
               visible={loader}
          /> 

          </div> : <>
          
            <Table border="1" style={{
                                     width:"80%",
                                     margin:"5rem auto",
                                     textAlign:"center",   }}>
      <Thead style={{backgroundColor:"black",color:'white',fontWeight:'bold',height:"60px"}}>
        <Tr>
          <Th>EMAIL</Th>
          <Th>NAME</Th>
          <Th>NUMBER</Th>
          <Th>UID</Th>
         


        </Tr>
      </Thead>
      <Tbody>
          {
              listUser.map((d,i) => {
                  return(
                      <Tr style={{backgroundColor:"lightgray",fontWeight:"bold"}}>
                          <Td>{d.Email}</Td>
                          <Td>{d.name}</Td>
                          <Td>{d.number}</Td>
                          <Td>{d.uid}</Td>
                         

                         


                      </Tr>
                  )
              })
          }
        
      </Tbody>
      </Table>

          <h1 style={{textAlign:"center",fontWeight:"Bold"}}>All Users Bookings </h1>

      <Table border="1" style={{
                                     width:"80%",
                                     margin:"5rem auto",
                                     textAlign:"center",   }}>
      <Thead style={{backgroundColor:"black",color:'white',fontWeight:'bold',height:"60px"}}>
        <Tr>
          <Th>NAME</Th>
          <Th>NUMBER</Th>
          <Th>CNIC</Th>
          <Th>ADDRESS</Th>
          <Th>Hotel Id</Th>
          <Th> Hotel IMG</Th>



        </Tr>
      </Thead>

      <Tbody>
          {
              booking.map((d,i) => {
                  return(
                      <Tr style={{backgroundColor:"lightgray",fontWeight:"bold"}}>
                          <Td>{d.name}</Td>
                          <Td>{d.number}</Td>
                          <Td>{d.cnic}</Td>
                          <Td>{d.address}</Td>
                          <Td>{d.id}</Td>
                          <Td><img width="120" height="80px" src={d.img}/></Td>


                      </Tr>
                  )
              })
          }
        
      </Tbody>
    </Table>
          </> }



        </div>
    )
}

export default Dashboard
