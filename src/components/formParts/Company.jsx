import React from "react";
const Company = () => {
  return (
    <dl>
      <dt>会社名・所属</dt>
      <dd>
        <div>
          <input
            type="text"
            name="company"
            required
            placeholder="ソフトバンド"
          />
        </div>
        <div>
          <input type="text" name="section" required placeholder="開発" />
        </div>
      </dd>
    </dl>
  );
};
export default Company;
