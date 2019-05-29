import React from 'react';
import Navigation from 'components/uiParts/Navigation';
//import Itemlist from 'components/ItemList';

import 'scss/pcBookshelf';

class PcTopBookshelf extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="testDiv">
            <Navigation />
            </div>
        );
    }
}

export default PcTopBookshelf;