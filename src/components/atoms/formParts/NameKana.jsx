import React from "react";
const NameKana = (props) => {
  const { val, updateState } = props;

  return (
    <dl>
      <dt>フリガナ</dt>
      <dd>
        <span>
          <input
            type="text"
            name="lastNameKana"
            required
            pattern="[ァ-ヴー/s ]+"
            placeholder="ヤマダ"
            title="カタカナを入力してください"
            value={val.lastNameKana}
            onChange={(e) => updateState(e)}
          />
        </span>
        <span>
          <input
            type="text"
            name="firstNameKana"
            required
            pattern="[ァ-ヴー/s ]+"
            placeholder="キョウコ"
            title="カタカナを入力してください"
            value={val.firstNameKana}
            onChange={(e) => updateState(e)}
          />
        </span>
      </dd>
    </dl>
  );
};
export default NameKana;
