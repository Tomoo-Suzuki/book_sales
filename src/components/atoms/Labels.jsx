import React from "react";
class Labels extends React.Component {
  render() {
    this.labelElements = [];
    this.labels = this.props.labels;
    if (this.labels[0]) {
      this.labelElements.push(<li key="free">無料</li>);
    }
    if (this.labels[1]) {
      this.labelElements.push(<li key="hasfree">無料あり</li>);
    }
    if (this.labels[2]) {
      this.labelElements.push(<li key="disc">割引</li>);
    }
    if (this.labels[3]) {
      this.labelElements.push(<li key="hasdisc">割引あり</li>);
    }
    if (this.labels[4]) {
      this.labelElements.push(<li key="new">NEW</li>);
    }
    if (this.labels[5]) {
      this.labelElements.push(<li key="off">20%OFF</li>);
    }
    if (this.labels[6]) {
      this.labelElements.push(<li key="fin">完結</li>);
    }
    return (
      <span>
        <ul>{this.labelElements}</ul>
      </span>
    );
  }
}
export default Labels;
