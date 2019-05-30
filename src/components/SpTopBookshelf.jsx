import React from 'react';
import Navigation from 'components/uiParts/Navigation';
import Itemlist from 'components/ItemList';

import 'scss/pcBookshelf';

class SpTopBookshelf extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="testDiv">
                <h1>SPdesu</h1>
                <Navigation />
                <Itemlist />
            </div>
        );
    }
}

export default SpTopBookshelf;