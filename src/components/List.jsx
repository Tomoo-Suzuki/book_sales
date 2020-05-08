import React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import Itemlist from "_components/organisms/ItemList";

import { selectList } from "_queries/query/selectList.js";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
    this.getData = this.getData.bind(this);
    console.log("LISTLIST");
    this.getData();
  }
  getData() {
    console.log("callll");
    selectList(this.props.dispatch);
  }
  render() {
    return (
      <div className="Bookseries">
        <Helmet>
          <title>Bookseries | List</title>
          <meta
            name="description"
            content="BookseriesListのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries,list" />
        </Helmet>
        <h1>List</h1>
        <Navigation />
        <ul>
          <Itemlist data={this.props} />
        </ul>
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
export default Redux.connect(mapStateToProps)(List);
