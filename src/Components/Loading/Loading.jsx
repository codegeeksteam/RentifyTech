import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div id="wifi-loader">
      <svg viewBox="0 0 86 86" className="circle-outer">
        <circle r="40" cy="43" cx="43" className="back"></circle>
        <circle r="40" cy="43" cx="43" className="front"></circle>
        <circle r="40" cy="43" cx="43" className="new"></circle>
      </svg>
      <svg viewBox="0 0 60 60" className="circle-middle">
        <circle r="27" cy="30" cx="30" className="back"></circle>
        <circle r="27" cy="30" cx="30" className="front"></circle>
      </svg>
      <svg viewBox="0 0 34 34" className="circle-inner">
        <circle r="14" cy="17" cx="17" className="back"></circle>
        <circle r="14" cy="17" cx="17" className="front"></circle>
      </svg>
      <div data-text="Searching" className="text"></div>
    </div>
  );
};

export default Loading;
