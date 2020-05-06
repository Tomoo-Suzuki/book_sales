import React from "react";
import Labels from "_components/atoms/Labels";
import PhotoWrap from "_components/molecules/PhotoWrap";
import ItemDataWrap from "_components/molecules/ItemDataWrap";
import BtnWrap from "_components/molecules/BtnWrap";
class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.props.items;
  }
  render() {
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
