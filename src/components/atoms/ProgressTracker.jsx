import React from "react";

import "_scss/atoms/_progressTracker";

const ProgressTracker = (props) => {
  const ptElemants = props.txtArray.map((text, index) => {
    return (
      <div className="progressTracker" key={index}>
        <span className="text">{text}</span>
        <span className="progressPointer">
          <span className="pointerInner"></span>
          <span className="progressBar"></span>
        </span>
      </div>
    );
  });

  return <div className="progressTrackerBox">{ptElemants}</div>;
};

export default ProgressTracker;
