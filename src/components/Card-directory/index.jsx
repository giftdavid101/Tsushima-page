import React, { useState } from "react";
// import CardPreview from "../Cardpreview";
import "./card.directory.style.scss";
import Button from '../button/index';
import CardItem from "../Carditems/index";
import './card.directory.style.scss';
import img from '../../img/wallhaven.jpg';

const initialState = [
  {
    id: 1,
    img: img,
    title: " one",
    description: " ",
  },
  {
    id: 2,
    img: img,
    title: "teo ",
    description: " ",
  },
  {
    id: 3,
    img: img,
    title: " thee",
    description: " ",
  },
  {
    id: 4,
    img: img,
    title: " four",
    description: " ",
  },
];

function CardDirectory() {
  const [state, setState] = useState(initialState);

  return (
    <div className="card-directory">
      {state.filter((item,idx)=> idx < 4).map(({id,img,title}) => (
        <CardItem key={id} img={img} />
        
        
      ))}
      


    </div>
  );
}

export default CardDirectory;
