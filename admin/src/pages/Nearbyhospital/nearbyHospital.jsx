import './nearbyhospital.scss';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Grid } from "@mui/material"
import { hospitalData } from '../../hospitaldata';

const NearbyHospitals = () => {

 

  return (
    <div className="list">
      <Grid container>
        <Grid item xs={2}>
      <Sidebar/>
      </Grid>
      <Grid item xs={10}>
      <Navbar/>
      <div className="nearby-hospitals">
      <h2>Nearby Hospitals</h2>
      <div className="hospital-list">
        {hospitalData.map((hospital, index) => (
          <div className="hospital" key={index}>
            <h3>{hospital.name}</h3>
            <img src={hospital.imageUrl} alt={hospital.name} />
            <p>Address: {hospital.address}</p>
            <p>Phone: {hospital.phone}</p>
          </div>
        ))}
      </div>
    </div>
      </Grid>
      </Grid>
    </div>
  )
}

export default NearbyHospitals;