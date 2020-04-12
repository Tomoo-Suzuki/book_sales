import React from "react";
import Labels from "_components/uiParts/Labels";
import PhotoWrap from "_components/uiParts/PhotoWrap";
import ItemDataWrap from "_components/uiParts/ItemDataWrap";
import BtnWrap from "_components/uiParts/BtnWrap";
class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.props.items;
  }
  render() {
    console.log(this.item);
    return (
      <li>
        <Labels labels={this.item.itemFlag} />
        <PhotoWrap photo={this.item} />
        <ItemDataWrap page={this.page} datas={this.item} />
        <BtnWrap no={this.item} status={this.item} page={this.page} />
      </li>
    );
  }
}
export default ItemList;
