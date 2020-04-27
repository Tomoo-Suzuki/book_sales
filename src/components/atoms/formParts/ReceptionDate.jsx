import React from "react";

const ReceptionDate = (props) => {
  const { val, updateState } = props;

  return (
    <dl>
      <dt>ご登録日</dt>
      <dd>
        <span>{val.reception_date}</span>
        <input
          type="hidden"
          name="receptionDate"
          value={val.reception_date}
          onChange={(e) => updateState(e)}
        />
      </dd>
    </dl>
  );
};
export default ReceptionDate;
