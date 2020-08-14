import * as React from "react";

import Labels from "_components/atoms/Labels";
import PhotoWrap from "_components/atoms/PhotoWrap";
import { ItemDataWrap } from "_components/molecules/ItemDataWrap";
import BtnWrap from "_components/molecules/BtnWrap";

import "_scss/organisms/_itemList";

import { InterfaceLabel } from "../types/atoms/InterfaceLabel";

type Props = {
  pageType: number;
  data: InterfaceLabel;
  shelfType: number;
};
const ItemList = (props: Props) => {
  const pageType = props.pageType;
  const items = props.data;
  let lists: {} | null | undefined;
  if (items) {
    lists = "";
    if (Object.keys(items).length > 0) {
      lists = items.map((item: InterfaceLabel, key: number) => {
        return (
          <li className="itemList" key={`itemwrap` + key}>
            <Labels
              shelfType={props.shelfType}
              data={item}
              key={`labels` + key}
            />
            <div>
              <PhotoWrap
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
              <BtnWrap
                pageType={pageType}
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
};
export default ItemList;
