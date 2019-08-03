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
class BtnWrap extends React.Component {
    render() {
        this.status = this.props.status;
        this.buttons = [];
        if (this.status === 0) {
            this.buttons.push(<BtnCart />);
            this.buttons.push(<BtnWish />);
            this.buttons.push(<BtnTrial />);
        } else if (this.status === 1) {
            this.buttons.push(<BtnReserve />);
            this.buttons.push(<BtnWish />);
        } else if (this.status === 2) {
            this.buttons.push(<BtnCartNew />);
            this.buttons.push(<BtnWishNew />);
            this.buttons.push(<BtnTrialNew />);
        } else if (this.status === 3) {
            this.buttons.push(<BtnReserveNew />);
            this.buttons.push(<BtnWishNew />);
            this.buttons.push(<BtnTrialNew />);
        } else if (this.status === 4) {
            this.buttons.push(<BtnFree />);
        }
        return (
            <ul>
                {this.buttons}
            </ul>
        );
    }
};
export default BtnWrap;