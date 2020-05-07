import React from "react";
import * as Redux from "react-redux";

import Labels from "_components/atoms/Labels";
import PhotoWrap from "_components/molecules/PhotoWrap";
import { ItemDataWrap } from "_components/molecules/ItemDataWrap";
import BtnWrap from "_components/molecules/BtnWrap";
class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.props.data;
    console.log("itemListやでー");
    console.log(this.props.genreNo);
  }
  render() {
    return (
      <li>
        <Labels data={this.item} />
        <PhotoWrap data={this.item} />
        <ItemDataWrap pageType={1} data={this.item} />
        <BtnWrap pageType={1} data={this.item} status={2} />
      </li>
    );
  }
}
export default ItemList;

// export default Redux.connect()(ItemList);
