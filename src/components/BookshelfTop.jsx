import React from "react";
import Navigation from "components/uiParts/Navigation";
import Itemlist from "components/uiParts/ItemList";

class BookshelfTop extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }
  render() {
    let itemLists = this.items.map(function(elm, key) {
      return <Itemlist items={elm} key={key} />;
    });

    return (
      <div className="Bookshelf">
        <h1>BookshelfTop</h1>
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

export default BookshelfTop;
