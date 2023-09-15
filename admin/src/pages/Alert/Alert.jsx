import React from "react";
import "./alert.scss";
import { Grid } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
 
function Alert() {
  return (
    <Grid container>
    <Grid item xs={2}>
      <Sidebar />
    </Grid>
    <Grid item xs={10}>
      <div className="kvcContainer">
        <Navbar />
        <div class="alert-container">
        <div class="alert-form">
            <h2>Send Emergency Alert</h2>
            <form>
                <textarea placeholder="Type your emergency alert..."></textarea>
                <input type="file" accept=".pdf, .doc, .jpg, .png" id="file-input"/>
                <label for="file-input" class="file-label">Attach File</label>
                <button type="submit">Send Alert</button>
            </form>
        </div>
      
    </div>
    </div>
    </Grid>
      </Grid>
  );
}

export default Alert;
