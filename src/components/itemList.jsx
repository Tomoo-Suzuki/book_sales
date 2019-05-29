import React from 'react';
import Labels from 'components/Labels'
import PhotoWrap from 'components/PhotoWrap'
import ItemDataWrap from 'components/ItemDataWrap'
import BtnWrap from 'components/BtnWrap'
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