import * as React from "react";

import LabelsShelf from "_components/atoms/LabelsShelf";
import PhotoWrapShelf from "_components/atoms/PhotoWrapShelf";
import { ItemDataWrap } from "_components/molecules/ItemDataWrap";

import "_scss/organisms/_itemList";
const ItemListShelf = (props) => {
  const pageType = props.pageType;
  const items = props.data;
  const shelfType = props.shelfType;
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
                shelfType={shelfType}
                key={`photo` + key}
              />
              <ItemDataWrap
                pageType={pageType}
                shelfType={shelfType}
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
};
export default ItemListShelf;
