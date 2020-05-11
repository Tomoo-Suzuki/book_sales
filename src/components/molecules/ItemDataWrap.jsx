import React from "react";
import "_scss/molecules/_itemDataWrap";

export const ItemDataWrap = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <span className="itemDataWrap">
      <a href={`/detail/` + data.id_book} className="name_book">
        {data.name_book}
      </a>
      <a href={`/detail/` + data.id_book} className="name_auther">
        {data.id_author}
      </a>
      <a href={`/detail/` + data.id_book} className="name_publisher">
        {data.id_publisher}
      </a>
      <p className="name_series">{data.name_series}</p>
      <p className="name_label">{data.label}</p>
      <p className="price_now">
        <span>{data.price_now}</span> 円(税込)
      </p>
      <p className="point">
        <span>{data.point}</span> ポイント
      </p>
      <p className="date_sales">{data.date_sales}</p>
      <p className="book_detail">{data.book_detail}</p>
    </span>
  );
};
