import * as React from "react";
import { Link } from "react-router-dom";

import "_scss/atoms/_photoWrap";

import { InterPhotoWrap } from "../types/atoms/InterPhotoWrap";

type Props = {
  data: InterPhotoWrap;
  pageType: number;
  rank: number;
};

const PhotoWrap = (props: Props): JSX.Element => {
  const photo = props.data;
  const ranking = Number(props.rank) + 1;
  let icon_rank: JSX.Element = <span></span>;
  let special: string = "";
  if (props.pageType === 1) {
    if (props.rank === 0) {
      special = "icon_gold";
    } else if (props.rank === 1) {
      special = "icon_silver";
    } else if (props.rank === 2) {
      special = "icon_bronze";
    }
    icon_rank = (
      <span className={`icon_rank ` + special}>
        <span>{ranking}</span>
      </span>
    );
  }
  return (
    <Link to={`/detail/` + photo.id_book} className="photoWrap">
      {icon_rank}
      <span className="imgBox">
        <img src={photo.url_img} alt={photo.name_book} />
      </span>
    </Link>
  );
};
export default PhotoWrap;
