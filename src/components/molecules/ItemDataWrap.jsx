import React from "react";
export const ItemDataWrap = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <span>
      <a href={data.url_detail}>{data.name_book}</a>
      <a href={data.url_detail}>{data.id_auther}</a>
      <a href={data.url_detail}>{data.id_publisher}</a>
      <p>{data.name_series}</p>
      <p>{data.label}</p>
      <p>{data.price_now} 円(税込)</p>
      <p>{data.point} ポイント</p>
      <p>{data.date_sales}</p>
      <p>{data.book_detail}</p>
    </span>
  );
};
