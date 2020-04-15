import React from "react";
const NameKana = () => {
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
          />
        </span>
      </dd>
    </dl>
  );
};
export default NameKana;
