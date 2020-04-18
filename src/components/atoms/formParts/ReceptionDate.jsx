import React from "react";
const ReceptionDate = (props) => {
  const { val, updateState } = props;

  return (
    <dl>
      <dt>ご登録日　inputHiddenにする</dt>
      <dd>
        <input
          type="date"
          name="receptionDate"
          value={val.receptionDate}
          onChange={(e) => updateState(e)}
        />
      </dd>
    </dl>
  );
};
export default ReceptionDate;
