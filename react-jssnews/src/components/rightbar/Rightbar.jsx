import "./rightbar.css";

export default function Rightbar({profile}) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <span className="eventheading"><center>Events</center></span>
          <div className="eventTitle">
            <span className="eventName">
              Yodha Event: Swachh Bharath Abhiyaan
            </span>
            <span className="eventDate">12/12/2022</span>
          </div>
          <div className="eventTitle">
            <span className="eventName">Yodha Event</span>
            <span className="eventDate">12/12/2022</span>
          </div>
          <div className="eventTitle">
            <span className="eventName">
              Yodha Event: Swachh Bharath Abhiyaan
            </span>
            <span className="eventDate">12/12/2022</span>
          </div>
        </div>

        <div className="activityContainer">
          <span className="eventheading"><center>Co-curricular Activity</center></span>
          <div className="activityCategory">
            <div className="activityCategoryTitle"><u>Music</u></div>
            <div className="activityTitle">
              <span className="eventName">Republic Day Event</span>
              <span className="eventDate">12/12/2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
