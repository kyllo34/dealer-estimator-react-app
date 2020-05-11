import React from 'react';
import './DealerBar.scss'
import dealerLogo from '../../assets/audi.png'

const DealerBar = () => {
  return (
    <div className="Dealer-Bar">
      <img src={dealerLogo} className="dealer-logo" alt="Dealer Logo"/>
      <div className="dealer-bar-text">Estimate of Auto Repairs</div>
    </div>
  )
}

export default DealerBar;