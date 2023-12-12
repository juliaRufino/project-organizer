import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <SayMyName nome="Julia"/>
      <SayMyName nome="Henrique"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Leonardo" 
      idade="20" 
      profissao="Programador" 
      foto="https://placeholder.com/150"
      />

      <List/>
    </div>
  );
}

export default App;
