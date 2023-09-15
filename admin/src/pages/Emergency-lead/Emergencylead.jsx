import React from 'react'
import { emergencyLeadsData } from '../../Emergencyleaddata'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Grid } from "@mui/material"
import "./emergencylead.scss"

function Emergencylead() {
  return (
    <div className="list">
      <Grid container>
        <Grid item xs={2}>
      <Sidebar/>
      </Grid>
      <Grid item xs={10}>
      <Navbar/>
      <div className="emergency-leads">
      <h2>Emergency Leads Availability</h2>
      <div className="leads-list">
        {emergencyLeadsData.map((lead, index) => (
          <div className="lead" key={index}>
            <img src={lead.imageUrl} alt={lead.name} />
            <h3>{lead.name}</h3>
            <p>{lead.contact}</p>
            <p>Specialization: {lead.specialization}</p>
          </div>
        ))}
      </div>
    </div>
      </Grid>
      </Grid>
    </div>
  )
}

export default Emergencylead