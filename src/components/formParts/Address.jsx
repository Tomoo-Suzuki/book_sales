import React from "react";

const Address = () => {
  return (
    <dl>
      <dt>ご住所</dt>
      <dd className="adress-data-wrap">
        <div>
          <input type="text" name="zip" required placeholder="117-2345" />
        </div>
        <div>
          <span>
            <input
              type="text"
              name="prefecture"
              required
              placeholder="東京都"
            />
          </span>
          <span>
            <input
              type="text"
              name="address1"
              required
              placeholder="豊島区池袋"
            />
          </span>
          <span>
            <input type="text" name="address2" required placeholder="3-7-18" />
          </span>
          <span>
            <input
              type="text"
              name="building"
              required
              placeholder="ブルジュファリハ"
            />
          </span>
        </div>
      </dd>
    </dl>
  );
};
export default Address;
