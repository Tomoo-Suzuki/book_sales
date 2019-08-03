import React from "react";
import Navigation from "components/uiParts/Navigation";
import Itemlist from "components/ItemList";

import "scss/pcBookshelf";

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }
  render() {
    //console.log(this.props.items);
    let itemLists = this.items.map(function(elm, key) {
      return <Itemlist items={elm} key={key} />;
    });

    return (
      <div className="Bookshelf">
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

export default Bookshelf;
