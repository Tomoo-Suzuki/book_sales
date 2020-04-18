import React from "react";

const Address = (props) => {
  const { val, updateState } = props;

  return (
    <dl>
      <dt>ご住所</dt>
      <dd className="adress-data-wrap">
        <div>
          <input
            type="text"
            name="zip"
            required
            placeholder="117-2345"
            value={val.zip}
            onChange={(e) => updateState(e)}
          />
        </div>
        <div>
          <span>
            <input
              type="text"
              name="prefecture"
              required
              placeholder="東京都"
              value={val.prefecture}
              onChange={(e) => updateState(e)}
            />
          </span>
          <span>
            <input
              type="text"
              name="city"
              required
              placeholder="豊島区池袋"
              value={val.city}
              onChange={(e) => updateState(e)}
            />
          </span>
          <span>
            <input
              type="text"
              name="adress3"
              required
              placeholder="3-7-18"
              value={val.adress3}
              onChange={(e) => updateState(e)}
            />
          </span>
          <span>
            <input
              type="text"
              name="building"
              required
              placeholder="ブルジュファリハ"
              value={val.useId}
              onChange={(e) => updateState(e)}
            />
          </span>
        </div>
      </dd>
    </dl>
  );
};
export default Address;
