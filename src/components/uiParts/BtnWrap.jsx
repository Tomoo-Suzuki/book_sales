import React from 'react';
import { BtnCart } from 'components/uiParts/btnEc/BtnCart'
import { BtnReserve } from 'components/uiParts/btnEc/BtnReserve'
import { BtnWish } from 'components/uiParts/btnEc/BtnWish'
import { BtnTrial } from 'components/uiParts/btnEc/BtnTrial'
import { BtnFree } from 'components/uiParts/btnEc/BtnFree'
import { BtnCartNew } from 'components/uiParts/btnEc/BtnCartNew'
import { BtnReserveNew } from 'components/uiParts/btnEc/BtnReserveNew'
import { BtnWishNew } from 'components/uiParts/btnEc/BtnWishNew'
import { BtnTrialNew } from 'components/uiParts/btnEc/BtnTrialNew'
const BtnWrap = () => {
    return (
        <ul>
            <BtnCart />
            <BtnReserve />
            <BtnWish />
            <BtnTrial />
            <BtnFree />
            <BtnCartNew />
            <BtnReserveNew />
            <BtnWishNew />
            <BtnTrialNew />
        </ul>
    );
};
export default BtnWrap;