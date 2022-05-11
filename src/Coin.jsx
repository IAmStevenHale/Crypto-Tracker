import React from 'react';
import './coin.css';

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className='coinContainer'>
      <div className='coinRow'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coinSymbol'>{symbol}</p>
        </div>
        <div className='coinData'>
          <p className='coinPrice'>${price}</p>
          <p className='coinVolume'>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='coinPercent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coinPercent green'>{priceChange.toFixed(2)}%</p>
          )}
          <p className='coinMarketCap'>
            Market Cap: ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
