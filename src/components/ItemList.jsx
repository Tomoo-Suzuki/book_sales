import React from "react";
import Labels from "components/uiParts/Labels";
import PhotoWrap from "components/uiParts/PhotoWrap";
import ItemDataWrap from "components/uiParts/ItemDataWrap";
import BtnWrap from "components/uiParts/BtnWrap";
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
