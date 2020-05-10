import React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemList from "_components/organisms/ItemList";

import { selectGenre } from "_queries/query/selectGenre.js";

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.id_genre = props.match.params.id;
    this.getData = this.getData.bind(this);
    this.getData(this.id_genre);
  }
  getData(id_genre) {
    selectGenre(id_genre, this.props.dispatch);
  }
  render() {
    let itemLists;
    try {
      if (Object.keys(this.props.item.item).length > 1) {
        console.log(this.props.item.item);
        itemLists = <ItemList data={this.props.item.item} pageType={0} />;
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
          <title>Bookseries | Genre</title>
          <meta
            name="description"
            content="BookseriesGenreのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookserie,genre" />
        </Helmet>
        <h1>Genre</h1>
        <Navigation />
        <ul>{itemLists}</ul>
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
export default Redux.connect(mapStateToProps)(Genre);
