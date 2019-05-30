import React from 'react';
import ReactDOM from 'react-dom';
import PcTopBookshelf from 'components/PcTopBookshelf'
import SpTopBookshelf from 'components/SpTopBookshelf'
class Bookshelf extends React.Component {
    constructor(props) {
        super(props);
        this.ua = window.navigator.userAgent.toLowerCase();
        this.device='';
        this.element='';
        this.deviceJudge();
        this.elementSwitch();

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
    elementSwitch(){
        if(this.device=='sp'){
            this.element=<SpTopBookshelf />;
        }else{
            this.element=<PcTopBookshelf />;
        }
    }
    render() {
        console.log(this.ua);
        console.log(this.device);
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