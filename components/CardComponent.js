// CardComponent.js
import React from 'react';
import styles from '../styles/Home.module.css';
 // Import the CSS file for styling

const CardComponent = ({ title, description, image, technologies }) => {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={image} />
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h3>{title}</h3>
        </div>
        <div className='card-body'>
            <p>{description}</p>
        </div>
        </div>
    </div>
  );
};

export default CardComponent;
