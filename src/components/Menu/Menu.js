import React, { useState } from "react";
import menu from './Menu.css';

const Menu = () => {
    let checkTransfer = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
    let currency = ['RUB', 'USD', 'EUR'];
    const [checkedState, setCheckedState] = useState(
        new Array(checkTransfer.length).fill(false)
    );
    const [radioValue, setRadioValue] = useState(null);

    const handleRadioChange = e => {
        setRadioValue(e.target.value);
    };

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    return (
        <div className="menu">
            <div>Валюта</div>
            <div className="radio-group">
                {currency.map((c, i) => {
                    return (
                        <div key={i} className="radio">
                            <label >
                                <input
                                    type="radio"
                                    id={c}
                                    name={c}
                                    value={c}
                                    checked={radioValue === { c }}
                                    onChange={handleRadioChange} />
                                <span className="text">{c}</span>
                            </label>
                        </div>)
                })}
            </div>
            <div>Количество пересадок</div>
            {checkTransfer.map((c, i, index) => {
                return (
                    <div key={i}>
                        <label>
                            <input
                                type="checkbox"
                                className="checkbox"
                                value={c}
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)} />
                            <span className="fake-checkbox"></span>
                            <span className="text">{c}</span>
                        </label>
                    </div>)
            })}

            {/* {updatedCheckedState.foreach(
                //этот кусок надо через стор прокинуть в app, чтобы в зависимости от чекбоксов рендерить тикеты
                (currentState, index) => {
                    if (currentState === true) {
                        return sum + tickets[index].stops;
                    }
                    return sum;
                })} */}
        </div>
    );
}

export default Menu;
