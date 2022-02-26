import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <img src="/assets/feed.png" alt="" className="sidebarimage " />
            <span className="sidebarListItemText">Feeds</span>
          </li>
          <li className="sidebarListItem">
            <img src="/assets/events.png" alt="" className="sidebarimage" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <img src="/assets/calendar.png" alt="" className="sidebarimage" />
            <span className="sidebarListItemText">Calendar of Events</span>
          </li>
          <li className="sidebarListItem">
            <img src="/assets/exam.png" alt="" className="sidebarimage" />

            <span className="sidebarListItemText">Exam Details</span>
          </li>
          <li className="sidebarListItem">
            <img src="/assets/job.png" alt="" className="sidebarimage" />
            <span className="sidebarListItemText">Training & Placement</span>
          </li>
          <li className="sidebarListItem">
            <img src="/assets/alumini.png" alt="" className="sidebarimage" />
            <span className="sidebarListItemText">Alumini</span>
          </li>
          <li className="sidebarListItem">
            <img
              src="/assets/publication.png"
              alt=""
              className="sidebarimage"
            />
            <span className="sidebarListItemText">Publications</span>
          </li>
          <li className="sidebarListItem">
            <img src="/assets/activity.png" alt="" className="sidebarimage" />
            <span className="sidebarListItemText">Activities</span>
          </li>
          <li className="sidebarListItem">
            <img src="/assets/message.png" alt="" className="sidebarimage" />
            <span className="sidebarListItemText">Messages</span>
          </li>
          <button className="sidebarButton">Discover More</button>
        </ul>
        {/* <hr className="sidebarHr"/> */}
        {/* <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/" alt="" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Hane doe</span>
                    </li>
                </ul> */}
      </div>
    </div>
  );
}
