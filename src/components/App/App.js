import React from 'react';
import './App.scss';
import Header from '../Header';
import DealerBar from '../DealerBar';
import CustomerBar from '../CustomerBar';
import VehicleBar from '../VehicleBar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <DealerBar />
      <CustomerBar />
      <VehicleBar />
    </div>
  );
}

export default App;
