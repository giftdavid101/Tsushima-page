import React, {useState} from 'react';
import './directory.style.scss';
import Box from "../Box";
import CardDirectory from "../Card-directory";
import ContentLeft from "../Content-left/content.left";
import img from '../../img/wallhaven.jpg';
import imgone from '../../img/wallhaven-one.jpg';
import imgtwo from '../../img/wallhaven-two.jpg';
import imgthree from '../../img/wallhaven-three.jpg';
import imgfour from '../../img/wallhaven-four.jpg';

const allCards = [
  {
    id: 1,
    img: img,
    title: " one",
    description: "Ghost of Tsushima passes 5m sales milestones ",
  },
  {
    id: 2,
    img: imgone,
    title: "teo ",
    description: "Ghost of Tsushima  easy made doesnt give up on ghost",
  },
  {
    id: 3,
    img: imgtwo,
    title: " thee",
    description: "Ghost of Tsushima is the best movie in town",
  },
  {
    id: 4,
    img: imgthree,
    title: " four",
    description: "Ghost ofTsushima has reached  1m subscribers on Youtube ",
  },
   {
    id: 5,
    img: imgfour,
    title: " four",
    description: "eeeeee",
  },
   {
    id: 6,
    img: img,
    title: " four",
    description: "ffffff",
  },
   {
    id: 7,
    img: img,
    title: " four",
    description: "ggggggg",
  },
];

const Directory = () => {
    const [activeCards, setActiveCards] = useState([0,1,2]);
  
    return (
        <div className="center-div">
         <div className="directory">
           <ContentLeft allCards={allCards} activeCards={activeCards} setActiveCards={setActiveCards} />
           <Box>
            <CardDirectory allCards={allCards} activeCards={activeCards} />
           </Box>
          </div>
        </div>

    )
}
export default Directory;