import React from "react";
import menu from './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            Валюта
            <div className="menu-btns">
                <button
                    type="button"
                    className="menu-btn"
                >RUB</button>
                <button
                    type="button"
                    className="menu-btn"
                >USD</button>
                <button
                    type="button"
                    className="menu-btn"
                >EUR</button>
            </div>
            Количество пересадок
            <form>
                <label>
                    
                </label>
            </form>
        </div>
    );
}

export default Menu;
