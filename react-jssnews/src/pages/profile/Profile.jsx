import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/coverpic.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img src="/assets/propic.jpg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Scarlett Laurel</h4>
              <span className="profileInfoDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                hic labore libero!
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <div className="profileFeedRight">
              <div className="profileFeedRightBox">
                <span className="right_title_number"><i>23</i></span>
                <span className="right_title">Posts</span>
              </div>

              <div className="profileFeedRightBox">
                <span className="right_title_number"><i>6</i></span>
                <span className="right_title">Publications</span>
                <div className="publication_details">
                  <div className="right_subtitle">
                    IoT security techniques and security threats
                    <span className="right_subtitle_authors">
                      Shilpa V, Janaki Vinayaka
                    </span>                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
