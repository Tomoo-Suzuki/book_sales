import React from "react";
import { Helmet } from "react-helmet";
import * as Redux from "react-redux";

import Navigation from "_components/organisms/Navigation";
import ItemList from "_components/organisms/ItemList";

import { selectGenre } from "_queries/query/selectGenre.js";

class Genre extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.getData = this.getData.bind(this);
    this.getData(id);
  }
  getData(genre) {
    selectGenre(genre, this.props.dispatch);
  }
  render() {
    const items = this.props.item;
    let lists;
    // if (items) {
    //   lists = items.map((item, key) => <ItemList data={item} key={key} />);
    // }
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
        {/* <ul>{lists}</ul> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { item: state.item };
};
export default Redux.connect(mapStateToProps)(Genre);

// export default Genre;
