import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Ticket from './components/Ticket/Ticket';
import initialTicketsData from './tickets.json';

function App() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    setTickets(initialTicketsData.tickets);
  }, [initialTicketsData.tickets])

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
