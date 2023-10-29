// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
