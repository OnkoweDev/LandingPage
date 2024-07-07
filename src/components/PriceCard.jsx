// src/PriceCard.js
import React from 'react';
import './PriceCard.css';

const PriceCard = ({title,amount,feature1,feature2,feature3}) => {
    return (
        <div className="price-card">
            <div className="card-header">
                <h2 className="title">{title}</h2>
                <p className="price">{amount}<span>/month</span></p>
            </div>
            <ul className="features">
                <li>{feature1}</li>
                <li>{feature2}</li>
                <li>{feature3}</li>
            </ul>
            <a href='https://dashboard.olukowe.co/' className="cta-button">Start writing</a>
        </div>
    );
}

export default PriceCard;
