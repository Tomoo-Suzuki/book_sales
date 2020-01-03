import React from "react";
import ReactDOM from "react-dom";
import fetchBook from "js/fetch";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Top from "components/Top.jsx";
import Genre from "components/Genre.jsx";

import List from "components/List.jsx";
import Detail from "components/Detail.jsx";
import Search from "components/Search.jsx";

import BookshelfTop from "components/BookshelfTop.jsx";
import BookshelfDetail from "components/BookshelfDetail.jsx";

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
  /*
  elementSwitch() {
    const items = this.state.items;
    const itemLength = Object.keys(items).length;
    if (itemLength != "") {
      this.element = <Bookshelf />;
    }
  }
  */
  render() {
    //this.elementSwitch();

    console.log("testtest");
    console.log(this.state.items);
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">TOP</Link>
            </li>
            <li>
              <Link to="/genre">Genre</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/bookshelf/top">bookshelf top</Link>
            </li>
            <li>
              <Link to="/bookshelf/detail">bookshelf detail</Link>
            </li>
          </ul>
        </div>
        <div>
          <Route exact path="/" component={Top} items={this.state.items} />
          <Route
            exact
            path="/genre"
            component={Genre}
            items={this.state.items}
          />
          <Route
            exact
            path="/detail"
            component={Detail}
            items={this.state.items}
          />
          <Route exact path="/list" component={List} items={this.state.items} />
          <Route
            exact
            path="/search"
            component={Search}
            items={this.state.items}
          />
          <Route
            exact
            path="/bookshelf/top"
            component={BookshelfTop}
            items={this.state.items}
          />
          <Route
            exact
            path="/bookshelf/detail"
            component={BookshelfDetail}
            items={this.state.items}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
