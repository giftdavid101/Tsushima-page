import React from 'react';
import Button from "../button";
import './carditems.styles.scss';

const CardItem = ({ title,img, description}) => (
  <div className="card-item">
    <div 
      className="image"
      style={{
        backgroundImage: `url(${img})`
      }}
    />
  
    <div className="card-item-content"> 
    <span className="heading"> {description} </span>
      <span className="text">Ps's4 fastest selling original first party game </span>
     
      <Button buttonStyle="btn-blue" buttonSize="btn-big"> Read more</Button>
  </div>
  
  </div>
);
export default CardItem;