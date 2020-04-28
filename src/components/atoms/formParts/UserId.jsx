import React from "react";

import "_scss/atoms/_tooltip";

const UserId = (props) => {
  const { val, updateState } = props;
  return (
    <dl>
      <dt>ユーザーID</dt>
      <dd className="has_tooltip">
        <input
          type="text"
          name="userId"
          required
          placeholder="tsex90876"
          value={val.useId}
          onChange={(e) => updateState(e)}
        />
        <span className="tooltip">
          3文字以上。半角の英数字、ハイフン、アンダースコアが使えます。ユーザーIDは一般に公開され、登録後の変更はできません。
        </span>
      </dd>
    </dl>
  );
};
export default UserId;
