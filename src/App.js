import React from 'react';
import { useSelector} from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Ticket from './components/Ticket/Ticket';

function App() {
const tickets = useSelector((state) => state.tickets.ticketsData);

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
