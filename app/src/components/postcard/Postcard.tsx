import { useState } from 'react';
import './postcard.css';

type PostcardProps = {
  /**titulo do card (username)*/
  titulo: string;
  /**conteudo do post*/
  texto: string;
  /**preenchimento do coração do like*/
  isFilled: boolean;
}


function PostCard ({titulo, texto, isFilled}:PostcardProps){

  var image;
  const [fill, setFill] = useState(isFilled);

  if (fill===true) {
    image = "./images/liked.png";
  }
  else {
    image = "./images/unliked.png";
  }



  return(
    <div className="postcard">
      <div className="titulo">{titulo}</div>
      <div className="texto">{texto}</div>
      <div className="cardbotton">     
        <img className="like" src={image} onClick={()=>{setFill(!fill)}} alt="Like Button"/>
      </div>
    </div>
  )

}

export default PostCard;