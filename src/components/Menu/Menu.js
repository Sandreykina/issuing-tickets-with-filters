import React, { useState } from "react";
import menu from './Menu.css';
import { useDispatch } from "react-redux/es/exports";
import { changeСurrency, updateSelect } from "../slices/menuSlice";
import { useSelector } from "react-redux";

const Menu = () => {
    
    const currency = useSelector(state => state.menu.currency);
    const currentCurrency = useSelector(state => state.menu.currentCurrency);
    const transfers = useSelector(state => state.menu.transfers); 
    const [checkedSelect, setCheckedSelect] = useState(
        new Array(transfers.length).fill(false)
    );
    const dispatch = useDispatch();

    const handleRadioChange = e => {
        dispatch(changeСurrency(e.target.value));
    };
    const handleCheckboxChange = (position) => {
        const updatedCheckedSelect = checkedSelect.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedSelect(updatedCheckedSelect);
        dispatch(updateSelect(checkedSelect))
    };

    return (
        <div className="menu">
            <div>Валюта</div>
            <div className="radio-group">
                {currency.map((c, i) => {
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
            {transfers.map((c, i, index) => {
                return (
                    <div key={i} className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                value={c}
                                checked={checkedSelect[index]}
                                onChange={() => handleCheckboxChange(index)} />
                            <span className="fake-checkbox"></span>
                            <span className="text">{c}</span>
                        </label>
                    </div>)
            })}
        </div>
    );
}

export default Menu;
