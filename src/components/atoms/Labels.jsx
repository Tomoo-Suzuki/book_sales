import React from "react";
class Labels extends React.Component {
  render() {
    this.labelElements = [];
    const labels = this.props.data;
    if (labels.label_free) {
      this.labelElements.push(<li key="free">無料</li>);
    }
    if (labels.label_free_s) {
      this.labelElements.push(<li key="hasfree">無料あり</li>);
    }
    if (labels.label_disc) {
      this.labelElements.push(<li key="disc">割引</li>);
    }
    if (labels.label_disc_s) {
      this.labelElements.push(<li key="hasdisc">割引あり</li>);
    }
    if (labels.label_new) {
      this.labelElements.push(<li key="new">NEW</li>);
    }
    if (labels.label_off) {
      this.labelElements.push(<li key="off">20%OFF</li>);
    }
    if (labels.labal_complete_s) {
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
