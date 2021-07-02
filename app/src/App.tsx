import Button from "./components/button/button";
import Link from "./components/link/link";

function App() {
  
  function Teste (){
    alert('funcionou');
  }

  return (
  <div>
    Hello World
  <Link onClick={Teste}>Clique aqui</Link>
  </div>
  );
}

export default App;
