import * as React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";

interface Props {}
interface State {}

class Point extends React.Component<Props, State> {
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
          <title>BookSales | Point</title>
          <link rel="canonical" href="http://suzuki-tomoo.com/" />
        </Helmet>
        <h2 className="ttl_h2">Point</h2>
        <Navigation />
      </div>
    );
  }
}

export default Point;
