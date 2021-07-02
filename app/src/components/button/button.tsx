import React from 'react';
import './button.css';


type ButtonProps = {
  /** texto do botao */
  children: string;
  /** ação do botao  */
  onClick: VoidFunction;
}

function Button ({children, onClick}: ButtonProps){

  return (
    <div>
      <button className="botao" onClick={onClick}>
        {children}
      </button>
    </div> 
  )
}
export default Button; 