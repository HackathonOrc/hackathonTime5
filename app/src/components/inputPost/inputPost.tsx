import { ChangeEvent } from 'react'
import './inputPost.css';

type InputPostProps = {
  /**nome de usuario*/
  name: string;
  /**Texto da caixa*/
  label: string;
  /**conteudo do post*/
  value: string;
  /**função que muda o valor do input*/
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  /**função de clique do botão postar*/
  onClick: VoidFunction;
}


function InputPost({name, value, onClick, onChange, label }: InputPostProps) {

  return (
    <div className="inputcard">
      <h3 className="name">{name}</h3>
      <input className="input" placeholder={label} value={value} onChange={onChange}/>
      <button className="post" onClick={onClick}>Postar</button>
    </div>
  )
}

export default InputPost;
