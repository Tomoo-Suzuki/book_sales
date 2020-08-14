import { InterfaceLabel } from "./InterfaceLabel";
import { InterfaceItemPhotoWrap } from "./InterItemPhotoWrap";
import { InterfaceItemDataWrap } from "./InterfaceItemDataWrap";

export interface InterfaceItemBook
  extends InterfaceLabel,
    InterfaceItemPhotoWrap,
    InterfaceItemDataWrap {
  no_title: number;
  point_sales: number;
  genre: number;
  name_genre: string;
  name_category: string;
  is_complete: boolean;
  is_latest: boolean;
  is_reserve: boolean;
  id_series: string;
  id_shop: string;
  url_detail: string;
  url_img_t: string;
  url_reader: string;
  date_register: string;
  date_sales: string;
}
