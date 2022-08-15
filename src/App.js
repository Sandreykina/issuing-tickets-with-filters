import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Ticket from './components/Ticket/Ticket';
import { useSelector } from "react-redux/es/hooks/useSelector";

const App = () => {

  const tickets = useSelector((state) => state.tickets.ticketsData);
  const selectArr = useSelector((state) => state.menu.selectArr);

  return (
    <div className="app">
      vfjnvfjnjfd
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
