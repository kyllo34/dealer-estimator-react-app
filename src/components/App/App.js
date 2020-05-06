import React from 'react';
import './App.scss';
import Header from '../Header';
import DealerBar from '../DealerBar';
import CustomerBar from '../CustomerBar';
import VehicleBar from '../VehicleBar';
import EstimateTable from '../EstimateTable';

const App = () => {
  return (
    <div className="App">
      <Header />
      <DealerBar />
      <div className="bigBar">
        <CustomerBar />
        <VehicleBar />
      </div>
      <EstimateTable />
    </div>
  );
}

export default App;
