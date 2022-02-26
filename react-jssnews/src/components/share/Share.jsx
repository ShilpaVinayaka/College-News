import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/propic.jpg" alt="" />
          <input
            type="text"
            placeholder="Create Post..."
            className="shareInput"
          />
        </div>
        <div className="shareBottom"></div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <img src="/assets/image.png" alt="" className="shareIcon" />
              <span className="shareOptionText">Photo</span>
            </div>
            <div className="shareOption">
              <img src="/assets/video.png" alt="" className="shareIcon" />
              <span className="shareOptionText">Video</span>
            </div>
            <div className="shareOption">
              <img src="/assets/feeling.png" alt="" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
