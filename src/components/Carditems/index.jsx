import React from 'react';
import Button from "../button";
import './carditems.styles.scss';

const CardItem = ({ title,img}) => (
  <div className="card-item">
    <div 
      className="image"
      style={{
        backgroundImage: `url(${img})`
      }}
    />
  {
  //   <div className="card-item-content">
  //     <span>Ghost of tshushima </span>
  //     <span> watch this interesting movie </span>
  //     <Button buttonStyle="btn-blue" buttonSize="btn-big"> Read more</Button>
  // </div>
  }
  </div>
);
export default CardItem;