import "./sidebar.scss";
import Home from "@mui/icons-material/Home";
import KVCIcon from "@mui/icons-material/Badge";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import StoreIcon from "@mui/icons-material/MessageOutlined";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { Link } from "react-router-dom";
import { useContext } from "react";
import HotelSharp from "@mui/icons-material/HotelSharp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="title">Dashboard</span>
        </Link>
      </div>

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Home className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/KVCresources" style={{ textDecoration: "none" }}>
            <li>
              <KVCIcon className="icon" />
              <span>KVC Resources</span>
            </li>
          </Link>
          <Link to="/communication" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Team Communication</span>
            </li>
          </Link>
          <Link to="/alerts" style={{ textDecoration: "none" }}>
            <li>
            <NotificationsNoneIcon className="icon" />
              <span>Alerts</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlined className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/agencies" style={{ textDecoration: "none" }}>
            <li>
            <HotelSharp className="icon" />
              <span>Agencies</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/nearbyhospitals" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Nearby Hospitals</span>
            </li>
          </Link>
          <Link to="/emergency-leads" style={{ textDecoration: "none" }}>
            <li>
            
              <span>Emergency Leads</span>
            </li>
          </Link>


          {/* <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Weather Forecast</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
