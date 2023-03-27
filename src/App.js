import React from 'react';
import { Navbar, Header, About, Services, Quotes, Contact, Footer, Counter, Portfolio } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Counter />
      <Services />
      <Quotes />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
