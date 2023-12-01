import React from 'react';

interface CardProps {
  id: string,
  price: string,
  amount: string,
  title: string,
  desc: string,
  img: string
};

const CircleCard: React.FC<CardProps> = ({price, amount, title, desc, img}) => {
  return (
    <div className="circle-card">
      <img src={img} alt="" />
      <div className="card-body">
        <h3 className='card-title | fw-bold'>{title}</h3>
        <p className='card-desc'>{desc}</p>
      </div>
      <div className="card-footer">
        <button className='circle-btn | btn btn-success'>Müraciət et</button>
        <div className='price-amount | fw-bold'>
          <span>{price}</span> 
          <span>/</span> 
          <span>{amount}</span>
        </div>
      </div>
    </div>
  )
};

export default CircleCard;