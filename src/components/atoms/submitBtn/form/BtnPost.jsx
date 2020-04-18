import React from "react";
const BtnPost = (props) => {
  const { submit } = props;
  return (
    <div>
      <input type="button" name="login" value="login" onClick={submit} />
    </div>
  );
};
export default BtnPost;
