import React from 'react';
import './button.css';

type ButtonProps = {
  children: string;
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