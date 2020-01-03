import React from "react";
import Navigation from "components/uiParts/Navigation";
import Itemlist from "components/uiParts/ItemList";

import "scss/Bookseries";

class Bookseries extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
    this.pageType;
    this.num = 1;
    if (this.num === 0) {
      this.pageType = "topBook";
    } else if (this.num === 1) {
      this.pageType = "topDetail";
    } else if (this.num === 2) {
      this.pageType = "topSearch";
    } else if (this.num === 3) {
      this.pageType = "topRanking";
    }
  }
  render() {
    if (this.items !== undefined) {
      this.elms = this.items.map((prop, index) => {
        //let newText = prop.txt.replace('<br />', '');
        //let txt = prop.txt;
        //let ttlElm1 = <p dangerouslySetInnerHTML={{ __html: txt }} />;
        return <Itemlist key={index} item={prop} />;
      });
    }
    return (
      <div className="bppkseries">
        <h1>SPdesu</h1>
        <Navigation page={this.page} />
        <ul page={this.page} className={`list_${this.pageType}`}>
          {this.elms}
        </ul>
      </div>
    );
  }
}

export default Bookseries;
