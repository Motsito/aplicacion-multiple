
import './App.css';
import Contador from "./Componentes/Contador/Contador"
import TicTacToe from "./Componentes/TicTacToe/TicTacToe"
import Calculadora from "./Componentes/Calculadora/Calculadora"



function App() {
  return (
    <div>  
      <Calculadora />
      <TicTacToe/>
      <Contador />
    </div>
  );
}

export default App;


