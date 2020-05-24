import * as React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import { selectDetail } from "_queries/query/selectDetail.ts";

import Navigation from "_components/organisms/Navigation";
import ItemDetail from "_components/organisms/ItemDetail";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.id_book = props.match.params.id_book;
    this.getData = this.getData.bind(this);
    this.getData(this.id_book);
  }
  getData(id_book) {
    selectDetail(id_book, this.props.dispatch);
  }
  render() {
    const item = this.props.item.detail;
    let thisItem;
    try {
      if (item.id_book === this.id_book) {
        thisItem = <ItemDetail data={item} pageType={0} />;
      }
    } catch (e) {
      if (this.props.item.item === undefined) {
        console.log("props still undef");
      }
    }
    return (
      <div className="Bookseries">
        <Helmet>
          <title>Bookseries | Detail</title>
          <meta
            name="description"
            content="BookseriesDetailディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries, detail" />
        </Helmet>
        <h2 className="ttl_h2">Detail</h2>
        <Navigation />
        {thisItem}
        <div>tableitemlistDetail</div>
        <div>seriesList</div>
        <div>AuthorItemList</div>
        <div>LabelItemList</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
// const mapDispatchToProps = (dispatch) => ({
//   selectGenre: (id_genre) => dispatch(selectGenre(id_genre)),
// });
export default Redux.connect(mapStateToProps)(Detail);
