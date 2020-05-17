import React from "react";

import LabelsShelf from "_components/atoms/LabelsShelf";
import PhotoWrapShelf from "_components/atoms/PhotoWrapShelf";
import { ItemDataWrap } from "_components/molecules/ItemDataWrap";

import "_scss/organisms/_itemList";
class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const pageType = this.props.pageType;
    const items = this.props.data;
    const shelfType = this.props.shelfType;
    console.log(items);
    let lists;
    if (items) {
      lists = "";
      if (Object.keys(items).length > 0) {
        lists = items.map((item, key) => {
          return (
            <li className="itemList" key={`itemwrap` + key}>
              <LabelsShelf
                data={item}
                key={`labels` + key}
                shelfType={shelfType}
              />
              <div>
                <PhotoWrapShelf
                  data={item}
                  rank={key}
                  pageType={pageType}
                  key={`photo` + key}
                />
                <ItemDataWrap
                  pageType={pageType}
                  data={item}
                  key={`data` + key}
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
