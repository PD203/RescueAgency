import "./teamCom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { Grid } from "@mui/material";

const TeamCom = () => {
  return (
    <div className="team-com-container">
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Navbar />
        <div className="team-com-content">
          <div className="chat-container">
            <div className="chat-header">
              <h2>Team Chat</h2>
            </div>
            <div className="chat-messages">
              <div className="message received">
                <span className="user">User 1:</span>
                <p>Hello, how are you?</p>
              </div>
              <div className="message sent">
                <span className="user">User 2:</span>
                <p>I'm good, thanks!</p>
              </div>
              {/* <!-- Add more messages here --> */}
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Type your message..." />
              <button>Send</button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
  

  );
};

export default TeamCom;