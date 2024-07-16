import React from 'react';
import Buttons from './Buttons';

function App() {
  const handleFirstButtonClick = () => {
    alert('First Button clicked!');
  };

  const handleSecondButtonClick = () => {
    alert('Second Button clicked!');
  };

  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Buttons
        onFirstClick={handleFirstButtonClick}
        onSecondClick={handleSecondButtonClick}
      />
    </div>
  );
}

export default App;

