import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Post.css";

export const Post = ({ post }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, []);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postButtomLeft">
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">{like}人がいいねしました</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};
