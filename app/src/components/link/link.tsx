import React from 'react';
import './link.css'

type LinkProps = {
  /** texto do link */
  children: string;
  /** ação do link  */
  onClick: VoidFunction;
}

function Link ({children, onClick}: LinkProps){
  return (
    <div>
      <button className="hiperlink" onClick={onClick} role='link'>{children}</button>
    </div> 
  )
}
export default Link;