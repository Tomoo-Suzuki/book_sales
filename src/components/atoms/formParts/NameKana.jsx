import React from "react";
const NameKana = (props) => {
  const { val, updateForm } = props;

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
            defaultValue={val.last_name_kana}
            onChange={(e) => updateForm(e)}
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
            defaultValue={val.first_name_kana}
            onChange={(e) => updateForm(e)}
          />
        </span>
      </dd>
    </dl>
  );
};
export default NameKana;
