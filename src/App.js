import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         React import input
        </p>
       <Input />
      </header>
    </div>
  );
}

export default App;
