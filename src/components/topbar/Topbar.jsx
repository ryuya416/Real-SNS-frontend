import React from "react";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLaft">
        <span className="logo">Real SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <input
            type="text"
            className="searchInput"
            placeholder="探し物はなんですか？"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">1</div>
        <div className="topbarIconItem">2</div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
  );
};
