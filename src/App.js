import React from 'react';
import Lottery from './Components/Lottery';
import './App.css';

function App() {
    return (
      <div className="App__container">
        <Lottery />
        <Lottery title="Mini Daily" numBalls={4} maxVal={10}/>
      </div>
    )
}

export default App;
