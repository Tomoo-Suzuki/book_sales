import React from "react";
const PhotoWrap = (props) => {
  const photo = props.data;
  return (
    <a href={photo.url_detail}>
      <span>
        <img src={photo.url_img} alt={photo.name_book} />
      </span>
    </a>
  );
};
export default PhotoWrap;
