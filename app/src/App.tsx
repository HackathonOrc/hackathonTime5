import Button from "./components/button/Button";
import Input from "./components/input/Input";
import { useState } from 'react';
import PostCard from './components/postcard/Postcard';
import Sidebar from "./components/sidebar/Sidebar";
import FormCard from "./components/formCard/FormCard";

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
      Hello World
      <Button onClick={Teste}>Cadastrar</Button>
      <PostCard titulo="username" texto="tweet aqui" isFilled={fill} onClick={() => { setFill(!fill) }}></PostCard>
      <FormCard image={3}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button onClick={Teste}>Cadastrar</Button>
          <Button onClick={Teste}>Cadastrar</Button>
          <Button onClick={Teste}>Cadastrar</Button>
          <Button onClick={Teste}>Cadastrar</Button>
          <Button onClick={Teste}>Cadastrar</Button>
          <Button onClick={Teste}>Cadastrar</Button>
        </div>
      </FormCard>
    </div >
  );
}

export default App;
