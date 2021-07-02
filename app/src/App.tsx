import Button from "./components/button/Button";
import Input from "./components/input/Input";
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");

  function Teste() {
    alert(input);
  }

  return (
    <div>
      <Input value={input} label="Nome" onChange={e => setInput(e.target.value)} />
      Hello World
      <Button onClick={Teste}>Cadastrar</Button>
    </div>
  );
}

export default App;
