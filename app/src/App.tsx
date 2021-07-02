import Button from "./components/button/button";


function App() {
  
  function Teste (){
    alert('funcionou');
  }

  return (
  <div>
    Hello World
  <Button onClick={Teste}>Cadastrar</Button>
  </div>
  );
}

export default App;
