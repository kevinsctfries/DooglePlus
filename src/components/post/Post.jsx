import "./post.scss";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  //temp
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 minute ago</span>
            </div>
          </div>
          <MoreHorizRoundedIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
            10 likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <MessageRoundedIcon />
            10 comments
          </div>
          <div className="item">
            <IosShareRoundedIcon />
            10 shares
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
