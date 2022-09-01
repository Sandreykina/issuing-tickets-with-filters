import React, { useEffect, useState } from "react";
import ticket from './Ticket.css';
import logo from '../../images/turkish-airlines-logo.png';
import { useSelector } from "react-redux";

const Ticket = ({ ticket }) => {
  const currentCurrency = useSelector(state => state.menu.currentCurrency);
  const [currencySign, changeCurrencySign] = useState("₽");
  const handleButtonClick = () => {
    alert("Купить!")
  };
  useEffect(() => {
    if (currentCurrency === 'RUB') {
      changeCurrencySign("₽");
    } if (currentCurrency === 'USD') {
      changeCurrencySign("$");
    } else if (currentCurrency === 'EUR') {
      changeCurrencySign("€");
    }
  }, [currentCurrency]);

  return (
    <article className="ticket">
      <div className="ticket-booking">
        <div className="ticket-booking-carrier">
          TURKISH AIRLINES
          <img src={logo} alt="ticket-logo" className="ticket-logo" />
        </div>
        <button
          type="button"
          onClick={handleButtonClick}
          className="ticket-btn"
        >Купить за {ticket.price} {currencySign}
        </button>
      </div>
      <div className="ticket-info">
        <div className="ticket-info-main">
          <div className="ticket-info-main-time">{ticket.departure_time}</div>
          <div className="ticket-info-stripe-arrow">
            <div className="ticket-info-stripe">{ticket.stops} пересадка </div>
            <div className="ticket-info-arrow"></div>
          </div>
          <div className="ticket-info-main-time">{ticket.arrival_time}</div>
        </div>
        <div className="ticket-info-subtitle">
          <div>
            <div className="ticket-info-places">{ticket.origin}, {ticket.origin_name}</div>
            <div className="ticket-info-dates">{ticket.departure_date}</div>
          </div>
          <div>
            <div className="ticket-info-places">{ticket.destination_name}, {ticket.destination}</div>
            <div className="ticket-info-dates">{ticket.arrival_date}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Ticket;
