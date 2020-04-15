import React from "react";
class ItemDataWrap extends React.Component {
  render() {
    this.data = this.props.datas;
    this.pabeType = this.props.pabeType;
    return (
      <span>
        <a href="">{this.data.name}</a>
        <a href="">{this.data.auther}</a>
        <a href="">{this.data.publisher}</a>
        <p>{this.data.category}</p>
        <p>{this.data.label}</p>
        <p>{this.data.price} 円(税込)</p>
        <p>{this.data.point} ポイント</p>
        <p>{this.data.releaseDate}</p>
        <p>{this.data.explain}</p>
      </span>
    );
  }
}
export default ItemDataWrap;
