import React from "react";
const NameKana = (props) => {
  const { val, updateState } = props;

  return (
    <dl className="require">
      <dt>フリガナ</dt>
      <dd>
        <span>
          <input
            type="text"
            name="last_name_kana"
            required
            pattern="[ァ-ヴー/s ]+"
            placeholder="ヤマダ"
            title="カタカナを入力してください"
            value={val.last_name_kana}
            onChange={(e) => updateState(e)}
          />
        </span>
        <span>
          <input
            type="text"
            name="first_name_kana"
            required
            pattern="[ァ-ヴー/s ]+"
            placeholder="キョウコ"
            title="カタカナを入力してください"
            value={val.first_name_kana}
            onChange={(e) => updateState(e)}
          />
        </span>
      </dd>
    </dl>
  );
};
export default NameKana;
