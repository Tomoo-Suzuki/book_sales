import React from "react";

const ReceptionDate = (props) => {
  const { val, updateForm } = props;

  return (
    <dl>
      <dt>ご登録日</dt>
      <dd>
        <span>{val.reception_date}</span>
        <input
          type="hidden"
          name="receptionDate"
          value={val.reception_date}
          onChange={(e) => updateForm(e)}
        />
      </dd>
    </dl>
  );
};
export default ReceptionDate;
