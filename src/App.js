import React, { useEffect, setState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Ticket from './components/Ticket/Ticket';
import { useSelector } from "react-redux/es/hooks/useSelector";

const App = () => {
debugger
  const tickets = useSelector((state) => state.tickets.ticketsData);
  const selectArr = useSelector((state) => state.menu.selectArr);
  const transfers = useSelector((state) => state.menu.transfers);

  const updatedChooseArr =  setState(new Array(selectArr).fill(false));

  let regexp = /\d+/;

  const updateTicketsRender = () => {
    selectArr.forEach(
      (currentSelectState, index) => {
        if (currentSelectState === true) {
          if (index === 0) {
            tickets.map((ticket, i) => {
              return (
                <Ticket key={i} ticket={ticket} />)
            })
          } else { //добавить возможность убрать галочку с "все"
            tickets.filter((ticket, i) => {
              let ticketStop = tickets[i].stops;
              let ticketStopFilter = transfers[index].match(regexp);
              if (index === 1) {
                ticketStopFilter = 0;
              }
              if (ticketStop == ticketStopFilter) {
                return (
                  <Ticket key={i} ticket={ticket} />)
              }
            })}
        }
      })
  }
  useEffect(() => {
    updateTicketsRender();
  }, [selectArr]);

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Menu />
        <section className="app-tickets">
        {tickets.map((ticket, i) => {
              return (
                <Ticket key={i} ticket={ticket} />)
            })}
        </section>
      </div>
    </div>
  );
}

export default App;
