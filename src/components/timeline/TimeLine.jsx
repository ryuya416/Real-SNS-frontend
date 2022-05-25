import React from "react";
import { Share } from "../share/Share";
import "./TimeLine.css";

export const TimeLine = () => {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {/* <Post /> */}
      </div>
    </div>
  );
};
