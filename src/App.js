import logo from './assets/images/pic2.jpg';
import './App.scss';
import "./assets/css/reset.css"
import PulldownAnimation from './views/PulldownElement/PulldownElement';
import AccordingElement from './views/AccordionElement/AccordingElement';
import FunctionElement from './views/FunctionElement/FunctionElement';
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import JumpElement from './components/JumpElment/JumpElement';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TRANSITION & ANIMATION
        </p>
      </header>
      {/* <PulldownAnimation/>
      <AccordingElement/> */}
      <FunctionElement />
      <nav className='nav-container'>
        <Button type="primary" ghost >
          <Link to="/pulldown" className='link'>PULLDOWN</Link>
        </Button>
        <Button type="primary" ghost>
          <Link to="/according" className='link'>ACCORDING</Link>
        </Button>
        <Button type="primary" ghost>
          <Link to="/other" className='link'>ACCORDING</Link>
        </Button>
      </nav>
      <JumpElement/>
    </div>
  );
}

export default App;
