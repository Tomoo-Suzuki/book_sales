import React from "react";
const NameKana = (props) => {
  const { val, updateForm, validate, error } = props;

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
            onBlur={(e) => validate(e)}
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
            onBlur={(e) => validate(e)}
          />
        </span>
      </dd>
      {error.last_name_kana}
      {error.first_name_kana}
    </dl>
  );
};
export default NameKana;
