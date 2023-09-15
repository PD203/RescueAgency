import React from 'react';
import './featured.scss'; 
import WarningIcon from "@mui/icons-material/Warning";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const EmergencyFeatured = () => {
  return (
    <div className="emergency-featured">
      <div className="top">
        <h1 className="title">Emergency Alerts</h1>
        <WarningIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={85} text={"85%"} strokeWidth={5} />
        </div>
        <p className="title">Total Alerts Today</p>
        <p className="amount">12</p>
        <p className="desc">
          Recent emergency alerts and warnings issued.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Active Alerts</div>
            <div className="itemResult negative">
              <div className="resultAmount">3</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Resolved Alerts</div>
            <div className="itemResult positive">
              <div className="resultAmount">9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyFeatured;
