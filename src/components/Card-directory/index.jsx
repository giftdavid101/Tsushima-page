import React from "react";
// import CardPreview from "../Cardpreview";
import "./card.directory.style.scss";
import CardItem from "../Carditems/index";
import './card.directory.style.scss';

function CardDirectory({allCards, activeCards}) {

  return (
    <div className="card-directory">
      {activeCards.map(index => (
        allCards[index] ? <CardItem key={index} img={allCards[index]['img']} description={allCards[index]["description"]} /> : undefined
      ))}      
    </div>
  );
}

export default CardDirectory;
