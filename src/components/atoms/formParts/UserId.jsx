import React from "react";

const UserId = () => {
  return (
    <dl>
      <dt>ユーザーID</dt>
      <dd>
        <input type="text" name="useId" required placeholder="tsex90876" />
      </dd>
      <dd>
        3文字以上。半角の英数字、ハイフン、アンダースコアが使えます。ユーザーIDは一般に公開され、登録後の変更はできません。
      </dd>
    </dl>
  );
};
export default UserId;
