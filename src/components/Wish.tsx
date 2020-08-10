import * as React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";

interface Props {
  id_series: string;
  ui: {
    display_style: Number;
  };
}
interface State {}

class Wish extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
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
          <title>BookSales | Wish</title>
          <link rel="canonical" href="http://suzuki-tomoo.com/" />
        </Helmet>
        <h2 className="ttl_h2">Wish</h2>
        <Navigation />
      </div>
    );
  }
}

export default Wish;
