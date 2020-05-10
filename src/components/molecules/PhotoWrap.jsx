import React from "react";
import "_scss/molecules/_photoWrap";

const PhotoWrap = (props) => {
  const photo = props.data;
  return (
    <a href={photo.url_detail} className="photoWrap">
      <span className="imgBox">
        <img src={photo.url_img} alt={photo.name_book} />
      </span>
    </a>
  );
};
export default PhotoWrap;
