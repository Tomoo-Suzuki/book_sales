import React from "react";
import Labels from "_components/atoms/Labels";
import PhotoWrap from "_components/molecules/PhotoWrap";
import { ItemDataWrap } from "_components/molecules/ItemDataWrap";
import BtnWrap from "_components/molecules/BtnWrap";
class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.props.data;
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
