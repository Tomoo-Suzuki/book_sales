import * as React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";

interface Props {
  items: object;
  ui: {
    display_style: number;
  };
}
interface State {}

class Help extends React.Component<Props, State> {
  items: object = {};
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }
  render() {
    return (
      <div className="Bookseries">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="BookseriesTopのディスクリプション"
          />
          <meta name="keyword=" content="suzuki,book,bookseries,top" />
          <title>BookSales | Help</title>
          <link rel="canonical" href="http://suzuki-tomoo.com/" />
        </Helmet>

        <h2 className="ttl_h2">Help</h2>
        <Navigation />
      </div>
    );
  }
}

export default Help;
