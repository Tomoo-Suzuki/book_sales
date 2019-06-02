import React from 'react';
import ReactDOM from 'react-dom';
import PcBookshelf from 'components/PcBookshelf';
import SpBookshelf from 'components/SpBookshelf';
import fetchBook from 'util/fetch';

class Bookshelf extends React.Component {
    constructor(props) {
        super(props);
        this.ua = window.navigator.userAgent.toLowerCase();
        this.device = '';
        this.element = '';
        this.deviceJudge();
        this.state = { items: '' }
        const thisClass = this;
        function dataSet(callBackData) {
            //thisClass.state = callBackData;
            thisClass.setState({ items: callBackData });
            //console.log(thisClass.state)
        }
        const url = './dummy/item.json';
        fetchBook(url, dataSet);
        //console.log(thisClass.state)
    }
    deviceJudge() {
        if (this.ua.indexOf('iphone') > 0 || this.ua.indexOf('ipod') > 0 || this.ua.indexOf('Android') > 0 && this.ua.indexOf('Mobile') > 0) {
            this.device = 'sp';
        } else if (this.ua.indexOf('ipad') > 0 || this.ua.indexOf('Android') > 0) {
            this.device = 'tab';
        } else {
            this.device = 'other';
        }
    }
    elementSwitch() {
        const items = this.state.items;
        const itemLength = Object.keys(items).length;
        if (itemLength != '') {
            if (this.device == 'sp') {
                this.element = <SpBookshelf items={this.state.items} />;
            } else {
                console.log(this.state)
                this.element = <PcBookshelf items={this.state.items} />;
            }
        }
    }
    componentDidMount() {
    }
    render() {
        this.elementSwitch();
        return (
            <div>
                {this.element}
            </div>
        );
    }
}

ReactDOM.render(
    <Bookshelf />,
    document.getElementById('contents')
);