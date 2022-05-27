import React, { useState, useEffect } from "react";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./TimeLine.css";
import axios from "axios";

export const TimeLine = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/628c3d929987b5bd8d35de22"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
