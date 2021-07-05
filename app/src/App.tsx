import Button from "./components/button/Button";
import Input from "./components/input/Input";
import { useState } from 'react';
import PostCard from './components/postcard/Postcard';

function App() {
  var like = false; //variável que definirá se o coração do like será preenchido ou não

  const [input, setInput] = useState("");
  const [fill, setFill] = useState(like);

  function Teste() {
    alert(input);
  }

  return (
    <div>
      <Input value={input} label="Nome" onChange={e => setInput(e.target.value)} />
      <Button onClick={Teste}>Cadastrar</Button><br/><br/>
      <PostCard titulo="username" texto="tweet aqui" isFilled={fill} onClick={()=>{setFill(!fill)}}></PostCard>
    </div>
  );
}

export default App;
