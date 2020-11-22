import React from 'react';
import './directory.style.scss';
import Box from "../Box";
// import Button from "../button";
import CardDirectory from "../Card-directory";
import ContentLeft from "../Content-left/content.left";

const Directory = () => {
    return (
        <div className="center-div">
         <div className="directory">
           <ContentLeft />
           <Box>
            <CardDirectory />
           </Box>
          </div>
        </div>

    )
}
export default Directory;