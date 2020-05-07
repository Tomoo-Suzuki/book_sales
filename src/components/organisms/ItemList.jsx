import React from "react";
import * as Redux from "react-redux";

import Labels from "_components/atoms/Labels";
import PhotoWrap from "_components/molecules/PhotoWrap";
import { ItemDataWrap } from "_components/molecules/ItemDataWrap";
import BtnWrap from "_components/molecules/BtnWrap";
class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const items = this.props.data.item.genre;
    let lists;
    if (items) {
      lists = "";
      if (Object.keys(items).length > 0) {
        lists = items.map((item, key) => {
          return (
            <React.Fragment>
              <Labels data={item} key={`labels` + key} />
              <PhotoWrap data={item} key={`photo` + key} />
              <ItemDataWrap pageType={1} data={item} key={`data` + key} />
              <BtnWrap pageType={1} data={item} status={2} key={`btn_` + key} />
            </React.Fragment>
          );
        });
      }
    }
    return <li>{lists}</li>;
  }
}
export default ItemList;

// export default Redux.connect()(ItemList);
