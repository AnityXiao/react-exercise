import logo from './assets/images/pic2.jpg';
import './App.css';
import "./assets/css/reset.css"
import PulldownAnimation from './views/PulldownElement/PulldownElement';

function App() {
  return (
    <div className="App">
      <PulldownAnimation/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
