import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import BaristaForm from './components/BaristaForm.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='title-container'>
        <div className='logo-title'>
          <img src='https://images.vexels.com/media/users/3/323382/isolated/preview/d857584213563a05e60472a0538a19c7-coffee-cup-cartoon-cozy.png' id='logo'/>
          <h1 className='title'>On My Grind</h1>
        </div>
        <p id='description'>
          So you think you can barista? 
          Let's put that to the test...
        </p>
      </div>
      <BaristaForm />
    </div>
  );
};

export default App;
