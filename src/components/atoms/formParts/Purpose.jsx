import React from "react";

const Gender = (props) => {
  const { val, updateState } = props;

  return (
    <dl>
      <dt>ご利用目的</dt>
      <dd className="radioAndCheckbox">
        <label>
          <span>小説の投稿</span>
          <input
            id="upload"
            type="checkbox"
            name="purpose"
            value="0"
            checked={val.purpose.upload === "1"}
            onChange={(e) => updateState(e)}
          />
        </label>
        <label>
          <span>本を読みたい</span>
          <input
            id="read"
            type="checkbox"
            name="purpose"
            value="1"
            checked={val.purpose.read === "1"}
            onChange={(e) => updateState(e)}
          />
        </label>
        <label>
          <span>本を買いたい</span>
          <input
            id="buy"
            type="checkbox"
            name="purpose"
            value="2"
            checked={val.purpose.buy === "1"}
            onChange={(e) => updateState(e)}
          />
        </label>
        <label>
          <span>本を売りたい</span>
          <input
            id="sell"
            type="checkbox"
            name="purpose"
            value="3"
            checked={val.purpose.sell === "1"}
            onChange={(e) => updateState(e)}
          />
        </label>
        <label>
          <span>その他</span>
          <input
            id="other"
            type="checkbox"
            name="purpose"
            value="4"
            checked={val.purpose.other === "1"}
            onChange={(e) => updateState(e)}
          />
        </label>
      </dd>
    </dl>
  );
};
export default Gender;
