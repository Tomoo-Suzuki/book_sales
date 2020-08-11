import * as React from "react";

import "_scss/atoms/_progressTracker";

const ProgressTracker = (props: { status: number; txtArray: string[] }) => {
  const status = props.status;
  const ptElemants = props.txtArray.map(
    (text: string, index: number): JSX.Element => {
      let classStatus;
      if (status === index) {
        classStatus = "current";
      } else if (status > index) {
        classStatus = "done";
      } else {
        classStatus = "";
      }

      return (
        <div className="progressTracker" key={index}>
          <span className="text">{text}</span>
          <span className={`progressPointer ` + classStatus}>
            <span className="pointerInner"></span>
            <span className="progressBar"></span>
          </span>
        </div>
      );
    }
  );

  return <div className="progressTrackerBox">{ptElemants}</div>;
};

export default ProgressTracker;
