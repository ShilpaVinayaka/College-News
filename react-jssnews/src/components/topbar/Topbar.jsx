import "./topbar.css";
import {
  Search,
  Forum,
} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="navbarIcon">
          <img src="/assets/navbar.png" alt="" className="topbarimg"/>
        </div>
        <span className="logo">
          <img src="/assets/logo.png" alt="" className="logoImage" />
        </span>
        <div className="searchbar">
          <Search className="searchIcon" />
          <input 
            placeholder="Search"
            className="searchInput"
          />
          </div>
      </div>

      <div className="topbarRight">
      <div className="topbarCombo topbarIconItem topbarIcons active">
          <img src="/assets/home.png" alt="" className="topbarimg" />
          <span className="topbarimgLink">Home</span>
        </div>
        <div className="topbarCombo topbarIconItem topbarIcons">
          <img src="/assets/department.png" alt="" className="topbarimg" />
          <span className="topbarimgLink">Department</span>
        </div>
        <div className="topbarCombo topbarIconItem topbarIcons">
          <Forum className="topbarimg" />
          <span className="topbarIconBadge">1</span>
          <span className="topbarimgLink">Message</span>
        </div>

        <div className="topbarCombo topbarIconItem topbarIcons">
          <img src="/assets/viewcalendar.png" alt="" className="topbarimg" />
          <span className="topbarimgLink">Calendar</span>
        </div>

        <div className="topbarCombo topbarIconItem topbarIcons">
          <img src="/assets/options.png" alt="" className="topbarimg" />
          <span className="topbarimgLink">Create</span>
        </div>
      </div>
      <div className="profilepic">
        <img src="/assets/propic.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
