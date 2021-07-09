import './postcard.css';

type PostcardProps = {
  /**titulo do card (username)*/
  titulo: string;
  /**conteudo do post*/
  texto: string;
  /**preenchimento do coração do like*/
  isFilled: boolean;
  /**açao do botao de curtida */
  onClick: VoidFunction;
}


function PostCard({ titulo, texto, isFilled, onClick }: PostcardProps) {

  var image;

  if (isFilled === true) {
    image = "./images/liked.png";
  }
  else {
    image = "./images/unliked.png";
  }



  return (
    <div className="postcard">
      <h3 className="titulo">{titulo}</h3>
      <p className="texto">{texto}</p>
      <div className="cardbotton">
        <img className="like" src={image} onClick={onClick} alt="Like Button" />
      </div>
    </div>
  )

}

export default PostCard;