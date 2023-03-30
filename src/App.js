import logo from './logo.svg';
import './App.css';

function App() {


  const corsEnabled = () => {
    fetch('http://localhost:3001/enabled')
    .then((res) => res.json())
    .then((data) => console.log(data))
  }
  const corsDisabled = () => {
    fetch('http://localhost:3001/disabled')
    .then((res) => res.json())
    .then((data) => console.log(data))
  }
  return (
    <div className="App">
      <h1>Hola, si quieres probar dos rutas con o sin cors da click en los siguientes botones</h1>
      <button onClick={corsEnabled}>CORS ENABLED</button>
      <button onClick={corsDisabled}>CORS DISABLED</button>
    </div>
  );
}

export default App;
