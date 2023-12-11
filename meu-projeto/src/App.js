import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Julia'
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a+b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(2,2)}</p>
      <img src={url} alt="fundo de imagem" />
    </div>
  );
}

export default App;
