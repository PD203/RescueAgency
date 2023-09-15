import React from 'react'
import Datatable from '../../components/usertable/Usertable'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Grid } from "@mui/material"

function User() {
  return (
    <div className="list">
    <Grid container>
      <Grid item xs={2}>
    <Sidebar/>
    </Grid>
    <Grid item xs={10}>
    <Navbar/>
    <div className="nearby-hospitals">
     <Datatable/>
  </div>
    </Grid>
    </Grid>
  </div>
  )
}

export default User