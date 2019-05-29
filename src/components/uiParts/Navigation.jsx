import React from 'react';
import ItemCount from 'components/uiParts/ItemCount'
import BtnStyleChange from 'components/uiParts/BtnStyleChange'
import BtnConfig from 'components/uiParts/BtnConfig'
import DisplayNum from 'components/uiParts/DisplayNum'
import Pager from 'components/uiParts/Pager'
import BtnOrderChange from 'components/uiParts/BtnOrderChange'
const PcNavigation = () => {
    return (
        <nav className="">
            <div>
                <ItemCount />
                <BtnStyleChange />
                <BtnConfig />
            </div>
            <div>
                <DisplayNum />
                <Pager />
            </div>
            <BtnOrderChange />
        </nav>
    );
};
export default PcNavigation;