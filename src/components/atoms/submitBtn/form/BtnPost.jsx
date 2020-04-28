import React from "react";
import "_scss/atoms/submitBtn/_btnPost.scss";

const BtnPost = (props) => {
  const { submit, btnName } = props;
  return (
    <div className="btnWrap">
      <div className="btn">
        <button type="button" name="login" value="login" onClick={submit}>
          {btnName}
        </button>
      </div>
    </div>
  );
};
export default BtnPost;
