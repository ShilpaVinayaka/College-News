import "./post.css";
import { MoreHoriz } from "@material-ui/icons";
import {Users} from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {

  // const user = Users.filter(u => u.userId===1);
  // console.log(user[0].userName);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img 
            src={Users.filter((u)=>u.userId === post?.userId)[0].userPropic} alt="" 
            className="postProfileImg" />
            <span className="postUsername">{Users.filter((u)=>u.userId === post?.userId)[0].userName}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreHoriz />
          </div>
        </div>
        <div className="userDetails">
          <span className="postDate">Student | 4th, ISE</span>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottomRight">
        <span className="postliked">{like} people liked your post</span>
            <span className="postCommentText">{post.comment} comments</span>
          </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="postlike">
              <button className="redbtn" onClick={likeHandler}>Love It!</button>
              <span className="btnBadge">1</span>
            </div>

            <div className="postlike">
              <button className="bluebtn" onClick={likeHandler}>Congrats!</button>
              <span className="btnBadge">10</span>
            </div>

            <div className="postlike">
              <button className="yellowbtn" onClick={likeHandler}>Great Work!</button>
              <span className="btnBadge">15</span>
            </div>

            <div className="postlike">
              <button className="greenbtn" onClick={likeHandler}>Very Creative!</button>
              <span className="btnBadge">13</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
