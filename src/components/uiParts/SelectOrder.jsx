import React from 'react';
//import sample from 'components/sample.txt'
import PcBtnStyleChange from 'component/PcBtnStyleChange.jsx'
export const SelectOrderYear = () => {
    return (
        <select>
            <option>2020年代</option>
            <option>2010年代</option>
            <option>2000年代</option>
            <option>1990年代</option>
            <option>1980年代</option>
            <option>1970年代</option>
            <option>1960年代</option>
        </select>
    );
};
export const SelectOrderCategory = () => {
    return (
        <select>
            <option>価格の高い順</option>
            <option>価格の安い順</option>
            <option>ポイントの高い順</option>
            <option>人気順</option>
            <option>五十音順</option>
        </select>
    );
};
//export SelectOrder;