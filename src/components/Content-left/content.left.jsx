import React from 'react';
import './content.left.style.scss';
import Button from "../button";


function ContentLeft({allCards, activeCards, setActiveCards}) {

  const isEqualArr = (arr1, arr2) => {
    return arr1.every(x => arr2.includes(x));
  }
  
  const moveNext = () =>  {
    const maxCards = allCards.length;
    if(activeCards[2] >= 7) return;
    const next = activeCards.map(card => (card + 1));
    setActiveCards(next);    
  }

  const movePrev = () =>  {    
    if(isEqualArr([0,1,2], activeCards)) return;
    setActiveCards(activeCards.map(card => (card - 1)));
  }



    return (
        <div className="content-main">
          <div className="content-left">
          <div className="logo"><img src="/assets/images/logo.png" alt="tsushima" /></div>
            <div className="content-one">
            <p className="text">
              Ghost of tsushima is an action-adventure game developed by sucker
              Punch productions and published by Sony inteeractive
              Entertainment. Featuring an open world, it follows Jin Sokai, a
              samurai on a quest to protest Tsushima island during the first
              Mangot invasion of Japan.
            </p>
            <div>
            <div className="icons">
            <div className="btn-div">
              {<Button onClick={movePrev} buttonStyle="btn-red"><i class="fas fa-less-than"></i></Button>}
              {<Button onClick={moveNext} buttonStyle="btn-red"><i class="fas fa-greater-than"></i></Button>} 
            </div>
            <div className="btn-div"></div>
            
            
            <div className="btn-div">
            <i className="" class="icns fab fa-facebook-f"></i>
            <i className="" class=" icns fab fa-twitter"></i>
            <i className="" class="icns fas fa-globe"></i>
            </div>
            </div>
          </div>
          </div>
        </div> 
        </div>
    )
}

export default ContentLeft;
