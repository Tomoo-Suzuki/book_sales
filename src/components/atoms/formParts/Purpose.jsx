import React from "react";

const Purpose = (props) => {
  const { val, updateForm } = props;
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
            defaultValue={0}
            checked={Number(val.purpose) === 0}
            onChange={(e) => updateForm(e)}
          />
        </label>
        <label>
          <span>本を読みたい</span>
          <input
            id="read"
            type="checkbox"
            name="purpose"
            defaultValue={1}
            checked={Number(val.purpose) === 1}
            onChange={(e) => updateForm(e)}
          />
        </label>
        <label>
          <span>本を買いたい</span>
          <input
            id="buy"
            type="checkbox"
            name="purpose"
            defaultValue={2}
            checked={Number(val.purpose) === 2}
            onChange={(e) => updateForm(e)}
          />
        </label>
        <label>
          <span>本を売りたい</span>
          <input
            id="sell"
            type="checkbox"
            name="purpose"
            defaultValue={3}
            checked={Number(val.purpose) === 3}
            onChange={(e) => updateForm(e)}
          />
        </label>
        <label>
          <span>その他</span>
          <input
            id="other"
            type="checkbox"
            name="purpose"
            value={4}
            checked={Number(val.purpose) === 4}
            onChange={(e) => updateForm(e)}
          />
        </label>
      </dd>
    </dl>
  );
};
export default Purpose;
