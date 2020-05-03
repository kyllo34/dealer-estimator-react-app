import React from 'react';
import './App.css';
import Header from '../Header';
import DealerBar from '../DealerBar';
import CustomerBar from '../CustomerBar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <DealerBar />
      <CustomerBar />
    </div>
  );
}

export default App;
