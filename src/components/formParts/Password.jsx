import React from "react";

const Password = () => {
  return (
    <dl>
      <dt>パスワード</dt>
      <dd>
        <input type="text" name="password" required placeholder="tsex90876" />
      </dd>
      <dd>8文字以上。半角英数字、半角記号が使えます。</dd>
    </dl>
  );
};
export default Password;
