import React from 'react';
import ReactDOM from 'react-dom';
import PcTopBookshelf from 'components/PcTopBookshelf.jsx'
class Bookshelf extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <PcTopBookshelf />
            </div>
        );
    }
}

ReactDOM.render(
    <Bookshelf />,
    document.getElementById('contents')
);