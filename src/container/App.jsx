import React from "react";
import fetchBook from "_lib/fetch";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";

import routes from "_container/router_lodable_data.jsx";
import Header from "_components/uiParts/Header";
import Footer from "_components/uiParts/Footer";

import "_scss/index.scss";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: "" };
    const thisClass = this;
    function dataSet(callBackData) {
      thisClass.setState({ items: callBackData });
    }
    const url = "./dummy/item.json";
    fetchBook(url, dataSet);
  }
  render() {
    const items = this.state.items;
    const itemLength = Object.keys(items).length;
    this.navs = [];

    if (itemLength) {
      this.elms = routes.map((route, idx) => {
        this.navs.push(
          <li>
            <Link to={route.path} key={idx}>
              {route.name}
            </Link>
          </li>
        );
        return route.component ? (
          <Route
            key={route.name}
            name={route.name}
            exact={route.exact}
            path={route.path}
            render={(props) => <route.component items={items} />}
          />
        ) : null;
      });
    }
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <div className="contents">
            <div className="contents-inner">
              <div>
                <ul>{this.navs}</ul>
              </div>
              <div>
                <Switch>
                  {this.elms}
                  <Redirect exact from="/" to="/" />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
