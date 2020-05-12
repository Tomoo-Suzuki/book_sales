import React from "react";

import Labels from "_components/atoms/Labels";
import PhotoWrap from "_components/atoms/PhotoWrap";
import { ItemDataWrap } from "_components/molecules/ItemDataWrap";
import BtnWrap from "_components/molecules/BtnWrap";

import "_scss/organisms/_itemList";
class ItemListDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const item = this.props.data;
    return (
      <ul className="itemListBox">
        <li className="itemList">
          <Labels data={item} />
          <div>
            <PhotoWrap data={item} />
            <ItemDataWrap pageType={1} data={item} />
            <BtnWrap pageType={1} data={item} status={2} />
          </div>
        </li>
      </ul>
    );
  }
}
export default ItemListDetail;
