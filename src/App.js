import logo from './assets/images/pic2.jpg';
import './App.scss';
import "./assets/css/reset.css"
import PulldownAnimation from './views/PulldownElement/PulldownElement';
import AccordingElement from './views/AccordionElement/AccordingElement';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TRANSITION & ANIMATION
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <PulldownAnimation/>
      <AccordingElement/>
    </div>
  );
}

export default App;
