import React, { useLayoutEffect  } from "react";
import menu from './Menu.css';
import { useDispatch } from "react-redux/es/exports";
import { changeСurrency, updateSelect } from "../slices/menuSlice";
import { useSelector } from "react-redux";

const Menu = () => {
    debugger
    const currency = useSelector(state => state.menu.currency);
    const currentCurrency = useSelector(state => state.menu.currentCurrency);
    const transfers = useSelector(state => state.menu.transfers); 
    const selectArr = useSelector(state => state.menu.selectArr); 
    const dispatch = useDispatch();

    const handleRadioChange = e => {
        const value = e.target.value;
        dispatch(changeСurrency({'value': 'value'}));
    };
    const handleCheckboxChange = (position) => {
        const updatedChoose = selectArr.map((item, index) =>
            index === position ? !item : item
        );
        dispatch(updateSelect(updatedChoose));
    };
    return (
        <div className="menu">
            <div>Валюта</div>
            <div className="radio-group">
                {currency.key.map((c, i) => {
                    return (
                        <div key={i} className="radio">
                            <label>
                                <input
                                    type="radio"
                                    id={c}
                                    name={c}
                                    value={c}
                                    checked={currentCurrency === { c }}
                                    onChange={handleRadioChange} />
                                <span className="text">{c}</span>
                            </label>
                        </div>)
                })}
            </div>
            <div>Количество пересадок</div>
            {transfers.key.map((c, i) => {
                return (
                    <div key={i} className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                value={c}
                                checked={selectArr[i]}
                                onChange={() => handleCheckboxChange(i)} />
                            <span className="fake-checkbox"></span>
                            <span className="text">{c}</span>
                        </label>
                    </div>)
            })}
        </div>
    );
}

export default Menu;
