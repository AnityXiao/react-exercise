import logo from './assets/images/pic2.jpg';
import './App.scss';
import "./assets/css/reset.css"
import PulldownAnimation from './views/PulldownElement/PulldownElement';
import AccordingElement from './views/AccordionElement/AccordingElement';
import FunctionElement from './views/FunctionElement/FunctionElement';
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import {ArrowUpOutlined} from '@ant-design/icons'
import JumpElement from './components/JumpElment/JumpElement';


function App() {
  function scrollTotop(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    console.log(scrollTop)
    document.documentElement.scrollTop = 0
    window.pageYOffset=0
    document.body.scrollTop =0
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TRANSITION & ANIMATION
        </p>
      </header>
      <div className="scroll_top" onClick={scrollTotop}>
      <ArrowUpOutlined className='back_icon'/>
      <p>BACK</p>
      </div>
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
