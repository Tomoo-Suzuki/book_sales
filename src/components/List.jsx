import React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemList from "_components/organisms/ItemList";

import { selectList } from "_queries/query/selectList.js";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.getData();
  }
  getData() {
    selectList(this.props.dispatch);
  }
  render() {
    // console.log(this.props);
    let itemLists;
    try {
      if (Object.keys(this.props.item.item).length > 1) {
        console.log(this.props.item.item);
        itemLists = <ItemList data={this.props.item.item} />;
      }
    } catch (e) {
      console.log(e);
      if (this.props.item.item === undefined) {
        console.log("props still undef");
      }
    }
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
        {itemLists}
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
