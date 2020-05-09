import {
  select_ranking
} from "_redux/actions/action.js";
import request from "_lib/request";

export const selectRanking = (dispatch) => {
  const query =
    `{
      selectRanking{
        bestRanking:selectRankingBest{
          ...books
        }
        eachNo1:selectRankingEach1{
          ...books
        }
        rankGenre1:selectRankingGenre(genre:1){
          ...books
        }
        rankGenre2:selectRankingGenre(genre:2){
          ...books
        }
        rankGenre3:selectRankingGenre(genre:3){
          ...books
        }
        rankGenre4:selectRankingGenre(genre:4){
          ...books
        }
        rankGenre5:selectRankingGenre(genre:5){
          ...books
        }
        rankGenre6:selectRankingGenre(genre:6){
          ...books
        }
        rankGenre7:selectRankingGenre(genre:7){
          ...books
        }
        rankGenre8:selectRankingGenre(genre:8){
          ...books
        }
        rankGenre9:selectRankingGenre(genre:9){
          ...books
        }
        rankGenre10:selectRankingGenre(genre:10){
          ...books
        }
        rankGenre11:selectRankingGenre(genre:11){
          ...books
        }
      }
  }
  fragment books on Item{
    id_book,
    no_title,
    name_book,
    point_sales,
    genre,
    name_genre,
    name_category,
    is_complete,
    is_latest,
    is_reserve,
    id_series,
    name_series,
    price_unit,
    price_now,
    book_detail,
    point_id,
    point,
    id_author,
    id_publisher,
    url_detail,
    url_img,
    url_reader,
    label_free,
    label_free_s,
    label_disc,
    label_disc_s,
    label_new,
    label_off,
    label_complete_s
  }`;
  request(query, "selectRanking").then((res) => {
    dispatch(select_ranking(res));
  });
};