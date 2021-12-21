import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminDashboardBtn = () => {
    const navigate = useNavigate()
    const state = useSelector(state => state)

    

    const gotoDashboard = () => {

        navigate("/dashboard")
    }
    return (
        <div>
            
            <button style={{
                       background:"none",
                       border:"none",
                       color:"white",
            }}onClick={gotoDashboard}> Admin Dashboard</button>
            
            
        
        </div>
    )
}
export default AdminDashboardBtn
