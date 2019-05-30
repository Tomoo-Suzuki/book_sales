import React from 'react';
import Labels from 'components/uiParts/Labels'
import PhotoWrap from 'components/uiParts/PhotoWrap'
import ItemDataWrap from 'components/uiParts/ItemDataWrap'
import BtnWrap from 'components/uiParts/BtnWrap'
const itemList = () => {
    return (
        <li>
            <Labels />
            <PhotoWrap />
            <ItemDataWrap />
            <BtnWrap />
        </li>
    );
};
export default itemList;