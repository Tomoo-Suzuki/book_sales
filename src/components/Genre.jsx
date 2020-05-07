import React from "react";
import { Helmet } from "react-helmet";
import * as Redux from "react-redux";

import Navigation from "_components/organisms/Navigation";
import ItemList from "_components/organisms/ItemList";

import { selectGenre } from "_queries/query/selectGenre.js";

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.id_genre = props.match.params.id;
    // console.log(this.id_genre);
    this.getData = this.getData.bind(this);
    this.getData(this.id_genre);
  }
  getData(id_genre) {
    // selectGenre(id_genre, this.props.dispatch);
    selectGenre(id_genre, this.props.dispatch);
  }
  render() {
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
        <ul>
          <ItemList data={this.props} />
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
export default Redux.connect(mapStateToProps)(Genre);

// export default Genre;
