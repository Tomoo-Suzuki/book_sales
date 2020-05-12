import React from "react";

import Labels from "_components/atoms/Labels";
import PhotoWrap from "_components/atoms/PhotoWrap";
import { ItemDataWrap } from "_components/molecules/ItemDataWrap";
import BtnWrap from "_components/molecules/BtnWrap";

import "_scss/organisms/_itemList";
class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const pageType = this.props.pageType;
    const items = this.props.data;
    let lists;
    if (items) {
      lists = "";
      if (Object.keys(items).length > 0) {
        lists = items.map((item, key) => {
          return (
            <li className="itemList" key={`itemwrap` + key}>
              <Labels data={item} key={`labels` + key} />
              <div>
                <PhotoWrap
                  data={item}
                  rank={key}
                  pageType={pageType}
                  key={`photo` + key}
                />
                <ItemDataWrap pageType={1} data={item} key={`data` + key} />
                <BtnWrap
                  pageType={1}
                  data={item}
                  status={2}
                  key={`btn_` + key}
                />
              </div>
            </li>
          );
        });
      }
    }
    return <ul className="itemListBox">{lists}</ul>;
  }
}
export default ItemList;
