import React from "react";
import ReactDOM from "react-dom";
import Bookshelf from "components/Bookshelf";
import fetchBook from "js/fetch";
import uaJudge from "js/uaJudge";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: "" };
    const thisClass = this;
    function dataSet(callBackData) {
      thisClass.setState({ items: callBackData });
      //fetch中に遷移すると恐らくerrorになる
    }
    const url = "./dummy/item.json";
    fetchBook(url, dataSet);
    const userAgent = uaJudge();
    this.device = userAgent.display;
  }
  elementSwitch() {
    const items = this.state.items;
    const itemLength = Object.keys(items).length;
    if (itemLength != "") {
      this.element = <Bookshelf items={this.state.items} />;
    }
  }
  componentDidMount() {}
  render() {
    this.elementSwitch();
    return <div>{this.element}</div>;
  }
}

export default Book;
/*
ReactDOM.render(
    <Bookshelf />,
    document.getElementById('contents')
);
*/
