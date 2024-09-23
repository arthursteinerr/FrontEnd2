import React from 'react';
import './Banner.css'; // Verifique se o caminho está correto

function Banner() {
  return (
    <img 
      className="styles-gif"
      src="https://media.giphy.com/media/xULW8qoq0EgTL1E316/giphy.gif?cid=790b7611qpxafpz3rh7ihz5gcgf1hd6nhb1t24phsvsgcub5&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      alt="Gif de uma mulher que seus óculos passam paisagem e saem borboletas de sua boca."
    />
  );
}

export default Banner;