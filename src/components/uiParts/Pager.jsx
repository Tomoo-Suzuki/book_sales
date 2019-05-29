import React from 'react';
const Pager = () => {
    return (
        <div className="pagerWrap">
            <ul className="pager">
                <li className="first"><span></span></li>
                <li className="before"><span></span></li>
                <li className="num"><span></span></li>
                <li className="currentß"><span></span></li>
                <li className="after"><span></span></li>
                <li className="last"><span></span></li>
            </ul>
        </div>
    );
};
export default Pager;