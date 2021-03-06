import * as React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemList from "_components/organisms/ItemList";

import { selectGenre } from "_queries/query/selectGenre.ts";

import { InterfaceGenre } from "../types/InterfaceGenre";

interface Props {
  id_series: string;
  item: {
    item: InterfaceGenre;
  };
  ui: {
    display_style: Number;
  };
}
interface State {}
class Genre extends React.Component<Props, State> {
  id_genre: string = "";
  constructor(props: Props) {
    super(props);
    this.id_genre = props.match.params.id;
    this.getData = this.getData.bind(this);
    this.getData(this.id_genre);
  }
  getData(id_genre) {
    selectGenre(id_genre, this.props.dispatch);
  }
  render() {
    const items = this.props.item.item;
    const display_style = this.props.ui.display_style;

    let itemLists;
    try {
      if (Object.keys(items).length > 1) {
        itemLists = <ItemList data={items} pageType={0} />;
      }
    } catch (e) {
      if (items === undefined) {
        console.log("props still undef");
      }
    }
    return (
      <div className={`Bookseries display_` + display_style}>
        <Helmet>
          <title>Bookseries | Genre</title>
          <meta
            name="description"
            content="BookseriesGenreのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookserie,genre" />
        </Helmet>
        <h2 className="ttl_h2">Genre</h2>
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return state;
};
export default Redux.connect(mapStateToProps)(Genre);
